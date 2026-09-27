const bcrypt = require("bcryptjs");

const prisma = require("../config/prisma");
const {
  generateToken,
  generateRefreshToken,
  verifyRefreshToken,
} = require("../utils/jwt");
const { successResponse, errorResponse } = require("../utils/response");

const buildUserResponse = (user) => ({
  id: user.id,
  name: user.name,
  phone: user.phone,
  role: user.role,
});

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

    const payload = {
      userId: user.id,
      role: user.role,
    };

    const token = generateToken(payload);
    const refreshToken = generateRefreshToken(payload);

    return successResponse(
      res,
      {
        token,
        refreshToken,
        user: buildUserResponse(user),
      },
      "User registered successfully"
    );
  } catch (error) {
    console.error("REGISTER ERROR:", error);
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

    const payload = {
      userId: user.id,
      role: user.role,
    };

    const token = generateToken(payload);
    const refreshToken = generateRefreshToken(payload);

    return successResponse(
      res,
      {
        token,
        refreshToken,
        user: buildUserResponse(user),
      },
      "Login successful"
    );
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    next(error);
  }
};

const refreshToken = async (req, res, next) => {
  try {
    const { refreshToken: token } = req.body;

    if (!token) {
      return errorResponse(
        res,
        "REFRESH_TOKEN_REQUIRED",
        "Refresh token is required",
        401
      );
    }

    let decoded;

    try {
      decoded = verifyRefreshToken(token);
    } catch (error) {
      return errorResponse(
        res,
        "INVALID_REFRESH_TOKEN",
        "Invalid or expired refresh token",
        401
      );
    }

    const userId = Number(decoded.userId);

    if (!userId) {
      return errorResponse(
        res,
        "INVALID_REFRESH_TOKEN",
        "Invalid refresh token",
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

    const payload = {
      userId: user.id,
      role: user.role,
    };

    const newToken = generateToken(payload);
    const newRefreshToken = generateRefreshToken(payload);

    return successResponse(
      res,
      {
        token: newToken,
        refreshToken: newRefreshToken,
        user: buildUserResponse(user),
      },
      "Token refreshed successfully"
    );
  } catch (error) {
    console.error("REFRESH TOKEN ERROR:", error);
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    // Stateless JWT setup:
    // The client must discard both access and refresh tokens.
    return successResponse(
      res,
      {},
      "Logout successful. Please discard the access and refresh tokens."
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
      { user },
      "User details retrieved successfully"
    );
  } catch (error) {
    console.error("GET ME ERROR:", error);
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