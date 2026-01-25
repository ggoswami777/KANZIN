import userModel from "../models/userModel.js";

/**
 * TOGGLE lesson completion
 * POST /api/lesson/complete
 */
export const toggleLessonCompletion = async (req, res) => {
  try {
    const { lessonId } = req.body;
    const userId = req.userId;

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const index = user.completedLessons.indexOf(lessonId);

    if (index === -1) {
      user.completedLessons.push(lessonId);
    } else {
      user.completedLessons.splice(index, 1);
    }

    await user.save();

    res.json({
      success: true,
      completedLessons: user.completedLessons,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * GET completed lessons
 * GET /api/lesson/completed
 */
export const getCompletedLessons = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await userModel
      .findById(userId)
      .select("completedLessons");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({
      success: true,
      completedLessons: user.completedLessons,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
