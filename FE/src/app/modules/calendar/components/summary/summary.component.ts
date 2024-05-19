import { Component, effect, input } from '@angular/core';
import { CalendarDay } from '../../interfaces/day.type';
import { CalendarTaskBuilder } from '../../builders/calendar-task.builder';

@Component({
  selector: 'lf-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {
  dayData = input<CalendarDay>();
  taskForm = CalendarTaskBuilder.buildTask();

  dayDataEff = effect(() => {
    console.log(this.dayData());
  });

  addTask(): void {
    this.dayData()?.tasks?.push(this.taskForm.value);
  }
}
