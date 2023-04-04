import 'colors';
import { QuizQuestion } from './quiz-question';
import { QuizTypeBoolean } from './quiz-type-boolean';
import { QuizTypeMultipleChoice } from './quiz-type-multiple-choice';
import { QuizTypeRange } from './quiz-type-range';
import { QuizTypeText } from './quiz-type-text';

function printQuiz(questions: QuizQuestion[]): void {
  questions.forEach((q) => q.print());
}

const questions: QuizQuestion[] = [
  new QuizTypeBoolean('Is this useful?'),
  new QuizTypeMultipleChoice('Rate the usefulness of this:', [
    '⭐',
    '⭐⭐',
    '⭐⭐⭐',
    '⭐⭐⭐⭐',
    '⭐⭐⭐⭐⭐',
  ]),
  new QuizTypeRange('What is the min & max salary you expect?'),
  new QuizTypeText('Any other suggestions?'),
];

printQuiz(questions);
