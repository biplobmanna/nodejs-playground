import { QuizQuestion } from './quiz-question';
import 'colors';

export class QuizTypeText implements QuizQuestion {
  type: string;
  description: string;

  constructor(description: string) {
    this.description = description;
    this.type = 'text';
  }

  print(): void {
    console.log(`Q: ${this.description}`.cyan);
    console.log('Answer: ______________');
    console.log('');
  }
}
