import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  output,
} from '@angular/core';
import { CalendarService } from '../../services/calendar.service';
import { DateNamesHelper } from '../../helpers/date-names.helper';
import { CalendarTaskBuilder } from '../../builders/calendar-task.builder';
import {
  Form,
  FormArray,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CalendarDay } from '../../interfaces/day.type';

@Component({
  selector: 'lf-calendar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  readonly dateNamesHelper = DateNamesHelper;
  readonly calendarService = inject(CalendarService);
  calendarBuilder = CalendarTaskBuilder;
  calendarForm = new FormGroup({
    days: new FormArray([]),
  });
  days = this.calendarForm.get('days') as FormArray;
  dayData = output();

  dateChanges = effect(() => {
    this.updateMonth();
    console.log(this.days);
  });

  monthName = computed(() => {
    return this.dateNamesHelper.getMonthName(this.calendarService.monthIndex());
  });

  goUpByMonth(): void {
    this.calendarService.monthIndex.update((num) => (num += 1));
  }

  goDownByMonth(): void {
    this.calendarService.monthIndex.update((num) => (num -= 1));
  }

  updateMonth(): void {
    this.days.clear();
    for (let i = 0; i < this.calendarService.numberOfDays(); i++) {
      console.log(this.calendarService.numberOfDays());
      console.log(this.calendarService.year());
      console.log(this.calendarService.monthIndex());
      this.days.push(
        this.calendarBuilder.buildDay(
          i + 1,
          this.calendarService.monthIndex(),
          this.calendarService.year(),
        ),
      );
    }
  }

  protected readonly console = console;
}
