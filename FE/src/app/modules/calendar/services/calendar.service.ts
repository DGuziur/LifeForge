import { Injectable, input } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  today = new Date();
  day = input<number>(this.today.getDay());
  year = input<number>(this.today.getFullYear());
  monthIndex = input<number>(this.today.getMonth());
}
