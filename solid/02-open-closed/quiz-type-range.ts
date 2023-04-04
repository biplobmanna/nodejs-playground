import { QuizQuestion } from './quiz-question';
import 'colors';

export class QuizTypeRange implements QuizQuestion {
  type: string;
  description: string;

  constructor(description: string) {
    this.description = description;
    this.type = 'range';
  }

  print(): void {
    console.log(`Q: ${this.description}`.cyan);
    console.log('Min: ______________');
    console.log('Max: ______________');
    console.log('');
  }
}
