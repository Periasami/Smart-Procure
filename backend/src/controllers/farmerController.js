const prisma = require("../config/prisma");
const { successResponse, errorResponse } = require("../utils/response");

const getMyProfile = async (req, res, next) => {
  try {
    const userId = Number(req.user.userId);

    if (!userId) {
      return errorResponse(
        res,
        "INVALID_USER",
        "Invalid user information",
        401
      );
    }

    const farmer = await prisma.users.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        phone: true,
        role: true,
        created_at: true,
      },
    });

    if (!farmer || farmer.role !== "FARMER") {
      return errorResponse(
        res,
        "FARMER_NOT_FOUND",
        "Farmer profile not found",
        404
      );
    }

    return successResponse(
      res,
      { farmer },
      "Farmer profile retrieved successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMyProfile,
};