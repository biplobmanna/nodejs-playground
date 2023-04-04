import { logCalorieSurplus } from './calorie-logger';

// now has only 1 reason to change
// follows the single responsibility principle
class CalorieTracker {
  private maxCalories: number;
  private currentCalories: number;
  constructor(maxCalories: number) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount: number): void {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      logCalorieSurplus();
    }
  }
}

const calorieTracker = new CalorieTracker(2000);

calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);
