const { successResponse } = require("../utils/response");

const processVoiceRequest = async (req, res, next) => {
  try {
    const { audioUrl, language = "en" } = req.body;

    if (!audioUrl) {
      return res.status(400).json({
        success: false,
        error: {
          code: "VOICE_INPUT_REQUIRED",
          message: "audioUrl is required",
        },
      });
    }

    return successResponse(
      res,
      {
        audioUrl,
        language,
        status: "VOICE_REQUEST_ACCEPTED",
        transcription: null,
      },
      "Voice request accepted for processing"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  processVoiceRequest,
};