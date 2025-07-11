const express = require("express");
const { GenerateQuiz, GenerateCodingQuiz, GenerateQuizFromPdf, SuggestTopic, getAllQuiz, getQuizById,getUserAttemptedQuiz, submitQuiz, getUserGeneratedQuiz } = require("../controllers/quizController");


const userAuth = require("../middleware/userAuth");
const quizRouter = express.Router();


quizRouter.post('/generate-quiz', userAuth, GenerateQuiz)
quizRouter.post("/generate-coding-test", GenerateCodingQuiz);
quizRouter.post("/generate-quiz-from-pdf", GenerateQuizFromPdf);
quizRouter.post("/suggest-topic", SuggestTopic);
quizRouter.get("/get-all-quizzes", getAllQuiz);
quizRouter.get("/get-quiz-by-id/:id", getQuizById);
quizRouter.post("/submit-quiz", submitQuiz);
quizRouter.get("/get-user-generated-quiz/:id", getUserGeneratedQuiz);
quizRouter.get("/get-user-attempted-quiz/:id", getUserAttemptedQuiz);




module.exports = quizRouter;