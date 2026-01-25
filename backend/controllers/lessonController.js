import userModel from "../models/userModel.js";

const lessonController = async (req, res) => {
  try {
    const { userId, lessonId } = req.body;

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isCompleted = user.completedLessons.includes(lessonId);

    if (isCompleted) {
     
      user.completedLessons = user.completedLessons.filter(
        (id) => id !== lessonId
      );
    } else {
   
      user.completedLessons.push(lessonId);
    }

    await user.save();

    res.json({
      success: true,
      completedLessons: user.completedLessons,
      message: isCompleted
        ? "Lesson removed from completed"
        : "Lesson marked as completed",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export default lessonController;
