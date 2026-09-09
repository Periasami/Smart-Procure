const {
  recommendCentres,
} = require("../services/recommendationService");

const getCentreRecommendations = async (req, res, next) => {
  try {
    // Temporary sample input until DB integration is completed.
    // Later this data will come from PostgreSQL.
    const centres = [
      {
        id: 1,
        name: "Centre A",
        predictedWait: 20,
        distance: 10,
        capacity: 80,
        processingRate: 75,
        cropCompatible: true,
      },
      {
        id: 2,
        name: "Centre B",
        predictedWait: 35,
        distance: 5,
        capacity: 90,
        processingRate: 60,
        cropCompatible: true,
      },
    ];

    const recommendations = recommendCentres(centres);

    return res.status(200).json({
      success: true,
      data: recommendations,
      message: "Centre recommendations generated successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCentreRecommendations,
};