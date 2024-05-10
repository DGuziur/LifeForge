import { Component, input, model } from '@angular/core';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { SummaryComponent } from '../../components/summary/summary.component';
import { CalendarDay } from '../../interfaces/day.type';

@Component({
  selector: 'app-main-calendar-view',
  standalone: true,
  imports: [CalendarComponent, SummaryComponent],
  templateUrl: './main-calendar-view.component.html',
  styleUrl: './main-calendar-view.component.scss',
})
export class MainCalendarViewComponent {
  dayData = model<CalendarDay>();
}
