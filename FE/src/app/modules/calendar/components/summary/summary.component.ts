import { Component, model } from '@angular/core';
import { CalendarDay } from '../../interfaces/day.type';

@Component({
  selector: 'lf-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {
  dayData = model<CalendarDay>();
}
