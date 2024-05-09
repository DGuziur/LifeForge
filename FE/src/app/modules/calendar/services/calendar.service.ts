import { computed, Injectable, input, OnInit, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  monthIndex = signal<number>(new Date().getMonth() + 1);
  year = signal<number>(new Date().getFullYear());
  numberOfDays = computed(() =>
    this.daysInMonth(this.monthIndex(), this.year()),
  );

  daysInMonth(month: number, year: number): number {
    return new Date(this.year(), this.monthIndex(), 0).getDate();
  }
}
