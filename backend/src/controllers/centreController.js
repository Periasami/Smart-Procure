const { successResponse } = require("../utils/response");

// Get all procurement centres
const getCentres = async (req, res, next) => {
  try {
    return successResponse(
      res,
      {
        status: "PENDING_DATABASE_INTEGRATION",
        centres: [],
      },
      "Procurement centre service is ready for database integration"
    );
  } catch (error) {
    next(error);
  }
};

// Get procurement centre by ID
const getCentreById = async (req, res, next) => {
  try {
    return successResponse(
      res,
      {
        centreId: req.params.id,
        status: "PENDING_DATABASE_INTEGRATION",
      },
      "Procurement centre retrieval service is ready for database integration"
    );
  } catch (error) {
    next(error);
  }
};

// Create procurement centre
const createCentre = async (req, res, next) => {
  try {
    return successResponse(
      res,
      {
        status: "PENDING_DATABASE_INTEGRATION",
        data: req.body,
      },
      "Procurement centre creation service is ready for database integration"
    );
  } catch (error) {
    next(error);
  }
};

// Update procurement centre
const updateCentre = async (req, res, next) => {
  try {
    return successResponse(
      res,
      {
        centreId: req.params.id,
        status: "PENDING_DATABASE_INTEGRATION",
        data: req.body,
      },
      "Procurement centre update service is ready for database integration"
    );
  } catch (error) {
    next(error);
  }
};

// Update procurement centre status
const updateCentreStatus = async (req, res, next) => {
  try {
    return successResponse(
      res,
      {
        centreId: req.params.id,
        status: req.body.status || "PENDING_DATABASE_INTEGRATION",
      },
      "Procurement centre status service is ready for database integration"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCentres,
  getCentreById,
  createCentre,
  updateCentre,
  updateCentreStatus,
};