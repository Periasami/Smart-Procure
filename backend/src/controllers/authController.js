const bcrypt = require("bcryptjs");

const prisma = require("../config/prisma");
const { generateToken } = require("../utils/jwt");
const { successResponse, errorResponse } = require("../utils/response");

const register = async (req, res, next) => {
  try {
    const { name, phone, password } = req.body;

    const existingUser = await prisma.users.findUnique({
      where: { phone },
    });

    if (existingUser) {
      return errorResponse(
        res,
        "USER_EXISTS",
        "A user with this phone number already exists",
        409
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        name,
        phone,
        password_hash: passwordHash,
        role: "FARMER",
      },
    });

    const token = generateToken({
      userId: user.id,
      role: user.role,
    });

    return successResponse(
      res,
      {
        token,
        user: {
          id: user.id,
          name: user.name,
          phone: user.phone,
          role: user.role,
        },
      },
      "User registered successfully"
    );
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    console.error("REGISTER STACK:", error.stack);
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { phone, password } = req.body;

    const user = await prisma.users.findUnique({
      where: { phone },
    });

    if (!user || !user.password_hash) {
      return errorResponse(
        res,
        "INVALID_CREDENTIALS",
        "Invalid phone number or password",
        401
      );
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!passwordMatch) {
      return errorResponse(
        res,
        "INVALID_CREDENTIALS",
        "Invalid phone number or password",
        401
      );
    }

    const token = generateToken({
      userId: user.id,
      role: user.role,
    });

    return successResponse(
      res,
      {
        token,
        user: {
          id: user.id,
          name: user.name,
          phone: user.phone,
          role: user.role,
        },
      },
      "Login successful"
    );
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    console.error("LOGIN STACK:", error.stack);
    next(error);
  }
};

const refreshToken = async (req, res, next) => {
  try {
    return errorResponse(
      res,
      "NOT_IMPLEMENTED",
      "Refresh token is not implemented yet",
      501
    );
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    return errorResponse(
      res,
      "NOT_IMPLEMENTED",
      "Logout is not implemented yet",
      501
    );
  } catch (error) {
    next(error);
  }
};

const getMe = async (req, res, next) => {
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

    const user = await prisma.users.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        phone: true,
        role: true,
      },
    });

    if (!user) {
      return errorResponse(
        res,
        "USER_NOT_FOUND",
        "User not found",
        404
      );
    }

    return successResponse(
      res,
      {
        user,
      },
      "User details retrieved successfully"
    );
  } catch (error) {
    console.error("GET ME ERROR:", error);
    console.error("GET ME STACK:", error.stack);
    next(error);
  }
};

module.exports = {
  register,
  login,
  refreshToken,
  logout,
  getMe,
};