import { Component } from '@angular/core';
import {CalendarComponent} from "../../components/calendar/calendar.component";

@Component({
  selector: 'app-main-calendar-view',
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: './main-calendar-view.component.html',
  styleUrl: './main-calendar-view.component.scss',
})
export class MainCalendarViewComponent {}
