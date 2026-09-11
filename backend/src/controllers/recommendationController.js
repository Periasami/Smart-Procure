const prisma = require("../config/prisma");
const {
  recommendCentres,
} = require("../services/recommendationService");
const { successResponse, errorResponse } = require("../utils/response");

const getCentreRecommendations = async (req, res, next) => {
  try {
    const centres = await prisma.procurement_centres.findMany({
      where: {
        status: "OPEN",
      },
      orderBy: {
        id: "asc",
      },
    });

    if (centres.length === 0) {
      return errorResponse(
        res,
        "NO_CENTRES_AVAILABLE",
        "No open procurement centres are currently available",
        404
      );
    }

    const recommendationsInput = centres.map((centre) => ({
      id: centre.id,
      name: centre.name,
      predictedWait: 0,
      distance: 0,
      capacity: centre.capacity,
      processingRate: centre.processing_rate,
      cropCompatible: true,
      location: centre.location,
      latitude: centre.latitude,
      longitude: centre.longitude,
      status: centre.status,
    }));

    const recommendations = recommendCentres(recommendationsInput);

    return successResponse(
      res,
      {
        recommendations,
      },
      "Centre recommendations generated successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCentreRecommendations,
};