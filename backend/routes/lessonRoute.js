import express from "express";
import authUser from "../middleware/authUser.js";
import {
  toggleLessonCompletion,
  getCompletedLessons,
} from "../controllers/lessonController.js";

const lessonRouter = express.Router();

lessonRouter.post("/complete", authUser, toggleLessonCompletion);
lessonRouter.get("/completed", authUser, getCompletedLessons);

export default lessonRouter;
