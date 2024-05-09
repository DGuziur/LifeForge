import { CalendarTask } from './task.type';

export interface CalendarDay {
  date: Date;
  tasks?: CalendarTask[];
  calories: number;
  caloriesGoal: number;
}
