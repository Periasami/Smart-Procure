const register = async (req, res, next) => {
  try {
    const { name, phone, email, password } = req.body;

    if (!name || !phone || !password) {
      return res.status(400).json({
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Name, phone, and password are required",
        },
      });
    }

    const bcrypt = require("bcryptjs");
    const prisma = require("../config/prisma");
    const { generateToken } = require("../utils/jwt");

    const existingUser = await prisma.users.findFirst({
      where: {
        OR: [{ phone }, ...(email ? [{ email }] : [])],
      },
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        error: {
          code: "USER_EXISTS",
          message: "A user with this phone or email already exists",
        },
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        name,
        phone,
        email: email || null,
        password_hash: passwordHash,
        role: "FARMER",
      },
    });

    const token = generateToken({
      userId: user.id,
      role: user.role,
    });

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      data: {
        user: {
          id: user.id,
          name: user.name,
          phone: user.phone,
          email: user.email,
          role: user.role,
        },
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { phone, password } = req.body;

    if (!phone || !password) {
      return res.status(400).json({
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Phone and password are required",
        },
      });
    }

    const bcrypt = require("bcryptjs");
    const prisma = require("../config/prisma");
    const { generateToken } = require("../utils/jwt");

    const user = await prisma.users.findUnique({
      where: {
        phone,
      },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        error: {
          code: "INVALID_CREDENTIALS",
          message: "Invalid phone or password",
        },
      });
    }

    const passwordMatches = await bcrypt.compare(password, user.password_hash);

    if (!passwordMatches) {
      return res.status(401).json({
        success: false,
        error: {
          code: "INVALID_CREDENTIALS",
          message: "Invalid phone or password",
        },
      });
    }

    const token = generateToken({
      userId: user.id,
      role: user.role,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        user: {
          id: user.id,
          name: user.name,
          phone: user.phone,
          email: user.email,
          role: user.role,
        },
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

const refreshToken = async (req, res, next) => {
  try {
    return res.status(501).json({
      success: false,
      error: {
        code: "NOT_IMPLEMENTED",
        message:
          "Refresh token will be implemented after the database schema is finalized",
      },
    });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    return res.status(501).json({
      success: false,
      error: {
        code: "NOT_IMPLEMENTED",
        message:
          "Logout will be implemented after the authentication flow is finalized",
      },
    });
  } catch (error) {
    next(error);
  }
};

const getMe = async (req, res, next) => {
  try {
    const prisma = require("../config/prisma");

    const user = await prisma.users.findUnique({
      where: {
        id: req.user.userId,
      },
      select: {
        id: true,
        name: true,
        phone: true,
        email: true,
        role: true,
        created_at: true,
        updated_at: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        error: {
          code: "USER_NOT_FOUND",
          message: "User not found",
        },
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        user,
      },
    });
  } catch (error) {
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
