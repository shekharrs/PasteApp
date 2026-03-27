import { runQuiz } from './node_modules/explainit/lib/quiz.js';
const file = process.argv[2];
if (file) await runQuiz([file]);
