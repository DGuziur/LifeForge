import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export class CalendarTaskBuilder {
  static buildDay(day: number, month: number, year: number): FormGroup {
    return new FormGroup({
      day: new FormControl<number>(day),
      month: new FormControl<number>(month),
      year: new FormControl<number>(year),
      tasks: new FormArray([]),
      calories: new FormControl<number>(0),
      caloriesGoal: new FormControl<number>(1800),
    });
  }

  static buildTask(): FormGroup {
    return new FormGroup({
      completeDate: new FormControl<Date | null>(null),
      createDate: new FormControl<Date>(new Date()),
      dueDate: new FormControl<Date | null>(null),
      description: new FormControl<string>(''),
      isDone: new FormControl<boolean>(false),
      title: new FormControl<string>(''),
    });
  }
}
