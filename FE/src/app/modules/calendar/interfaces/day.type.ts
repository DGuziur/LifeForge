import { CalendarTask } from './task.type';

export interface CalendarDay {
  day: number;
  month: number;
  year: number;
  tasks?: CalendarTask[];
  calories: number;
  caloriesGoal: number;
}
