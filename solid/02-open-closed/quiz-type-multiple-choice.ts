import { QuizQuestion } from './quiz-question';
import 'colors';

export class QuizTypeMultipleChoice implements QuizQuestion {
  type: string;
  description: string;
  options: string[];

  constructor(description: string, options: string[]) {
    this.description = description;
    this.options = options;
    this.type = 'multipleChoice';
  }

  print(): void {
    console.log(`Q: ${this.description}`.cyan);
    this.options.forEach((option, i) => {
      console.log(`${i + 1}. ${option}`);
    });
    console.log('');
  }
}
