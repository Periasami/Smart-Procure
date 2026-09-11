const prisma = require("../config/prisma");
const { successResponse, errorResponse } = require("../utils/response");

// Get all procurement centres
const getCentres = async (req, res, next) => {
  try {
    const centres = await prisma.procurement_centres.findMany({
      orderBy: {
        id: "asc",
      },
    });

    return successResponse(
      res,
      {
        centres,
      },
      "Procurement centres retrieved successfully"
    );
  } catch (error) {
    next(error);
  }
};

// Get procurement centre by ID
const getCentreById = async (req, res, next) => {
  try {
    const centreId = Number(req.params.id);

    if (!centreId) {
      return errorResponse(
        res,
        "INVALID_CENTRE_ID",
        "Invalid centre ID",
        400
      );
    }

    const centre = await prisma.procurement_centres.findUnique({
      where: {
        id: centreId,
      },
    });

    if (!centre) {
      return errorResponse(
        res,
        "CENTRE_NOT_FOUND",
        "Procurement centre not found",
        404
      );
    }

    return successResponse(
      res,
      {
        centre,
      },
      "Procurement centre retrieved successfully"
    );
  } catch (error) {
    next(error);
  }
};

// Create procurement centre
const createCentre = async (req, res, next) => {
  try {
    const {
      name,
      location,
      latitude,
      longitude,
      capacity,
      processing_rate,
      opening_time,
      closing_time,
    } = req.body;

    const centre = await prisma.procurement_centres.create({
      data: {
        name,
        location,
        latitude,
        longitude,
        capacity,
        processing_rate,
        opening_time,
        closing_time,
      },
    });

    return successResponse(
      res,
      {
        centre,
      },
      "Procurement centre created successfully"
    );
  } catch (error) {
    next(error);
  }
};

// Update procurement centre
const updateCentre = async (req, res, next) => {
  try {
    const centreId = Number(req.params.id);

    if (!centreId) {
      return errorResponse(
        res,
        "INVALID_CENTRE_ID",
        "Invalid centre ID",
        400
      );
    }

    const existingCentre = await prisma.procurement_centres.findUnique({
      where: {
        id: centreId,
      },
    });

    if (!existingCentre) {
      return errorResponse(
        res,
        "CENTRE_NOT_FOUND",
        "Procurement centre not found",
        404
      );
    }

    const {
      name,
      location,
      latitude,
      longitude,
      capacity,
      processing_rate,
      opening_time,
      closing_time,
    } = req.body;

    const centre = await prisma.procurement_centres.update({
      where: {
        id: centreId,
      },
      data: {
        ...(name !== undefined && { name }),
        ...(location !== undefined && { location }),
        ...(latitude !== undefined && { latitude }),
        ...(longitude !== undefined && { longitude }),
        ...(capacity !== undefined && { capacity }),
        ...(processing_rate !== undefined && { processing_rate }),
        ...(opening_time !== undefined && { opening_time }),
        ...(closing_time !== undefined && { closing_time }),
      },
    });

    return successResponse(
      res,
      {
        centre,
      },
      "Procurement centre updated successfully"
    );
  } catch (error) {
    next(error);
  }
};

// Update procurement centre status
const updateCentreStatus = async (req, res, next) => {
  try {
    const centreId = Number(req.params.id);
    const { status } = req.body;

    if (!centreId) {
      return errorResponse(
        res,
        "INVALID_CENTRE_ID",
        "Invalid centre ID",
        400
      );
    }

    const allowedStatuses = [
      "OPEN",
      "CLOSED",
      "MAINTENANCE",
    ];

    if (!allowedStatuses.includes(status)) {
      return errorResponse(
        res,
        "INVALID_CENTRE_STATUS",
        `Invalid centre status. Allowed values: ${allowedStatuses.join(", ")}`,
        400
      );
    }

    const existingCentre = await prisma.procurement_centres.findUnique({
      where: {
        id: centreId,
      },
    });

    if (!existingCentre) {
      return errorResponse(
        res,
        "CENTRE_NOT_FOUND",
        "Procurement centre not found",
        404
      );
    }

    const centre = await prisma.procurement_centres.update({
      where: {
        id: centreId,
      },
      data: {
        status,
      },
    });

    return successResponse(
      res,
      {
        centre,
      },
      "Procurement centre status updated successfully"
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