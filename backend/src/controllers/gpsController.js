const { successResponse } = require("../utils/response");

const getNearbyCentres = async (req, res, next) => {
  try {
    const { latitude, longitude, radius = 10 } = req.query;

    const lat = Number(latitude);
    const lng = Number(longitude);
    const searchRadius = Number(radius);

    if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
      return res.status(400).json({
        success: false,
        error: {
          code: "INVALID_LOCATION",
          message: "Valid latitude and longitude are required",
        },
      });
    }

    if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
      return res.status(400).json({
        success: false,
        error: {
          code: "INVALID_COORDINATES",
          message: "Latitude or longitude is outside the valid range",
        },
      });
    }

    if (!Number.isFinite(searchRadius) || searchRadius <= 0) {
      return res.status(400).json({
        success: false,
        error: {
          code: "INVALID_RADIUS",
          message: "Radius must be greater than 0",
        },
      });
    }

    return successResponse(
      res,
      {
        location: {
          latitude: lat,
          longitude: lng,
        },
        radiusKm: searchRadius,
        centres: [],
        status: "GPS_SEARCH_READY",
      },
      "Nearby procurement centre search is ready"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getNearbyCentres,
};