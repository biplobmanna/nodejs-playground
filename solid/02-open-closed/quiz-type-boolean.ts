import { QuizQuestion } from './quiz-question';
import 'colors';

export class QuizTypeBoolean implements QuizQuestion {
  type: string;
  description: string;

  constructor(description: string) {
    this.description = description;
    this.type = 'boolean';
  }

  print(): void {
    console.log(`Q: ${this.description}`.cyan);
    console.log('1. True');
    console.log('2. False');
    console.log('');
  }
}
