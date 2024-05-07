import { Task } from './task.type';

export interface Day {
  date: Date;
  tasks?: Task[];
}
