STANDARD FOR ALL FUTURE QUIZZES

1. Each quiz page continues to display exactly 10 questions.
2. Each JSON question bank must contain at least 20 questions.
3. A bank of 30 questions is preferred.
4. Every question must have a unique and stable id.
5. Each question must contain exactly four options.
6. The answer value is the zero-based position of the correct option:
   0 = first option
   1 = second option
   2 = third option
   3 = fourth option
7. The shared assets/js/quiz.js file automatically:
   - selects 10 questions
   - randomises their order
   - avoids the immediately previous set where possible
   - permits older questions to return on later attempts
8. Future quiz pages only need to point data-quiz-url to their own JSON file.
9. Do not create a separate JavaScript engine for each quiz.
