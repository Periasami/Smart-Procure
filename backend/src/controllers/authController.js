const register = async (req, res, next) => {
  try {
    return res.status(501).json({
      success: false,
      error: {
        code: "NOT_IMPLEMENTED",
        message: "User registration will be implemented after the database schema is finalized",
      },
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    return res.status(501).json({
      success: false,
      error: {
        code: "NOT_IMPLEMENTED",
        message: "User login will be implemented after the database schema is finalized",
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
        message: "Refresh token will be implemented after the database schema is finalized",
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
        message: "Logout will be implemented after the authentication flow is finalized",
      },
    });
  } catch (error) {
    next(error);
  }
};

const getMe = async (req, res, next) => {
  try {
    return res.status(501).json({
      success: false,
      error: {
        code: "NOT_IMPLEMENTED",
        message: "User profile retrieval will be implemented after the database schema is finalized",
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