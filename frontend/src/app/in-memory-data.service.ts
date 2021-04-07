import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Goal } from './goal';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const goals = [
      { id: 1, name: 'Beh', date: '2021-10-01', priority: 4, description: 'Description',},
      { id: 2, name: 'Futbal', date: '2021-10-01', priority: 2, description: 'Description', },
      { id: 3, name: 'Cyklistika', date: '2021-10-11', priority: 4, description: 'Description', },
      { id: 4, name: 'Trening', date: '2021-10-02', priority: 5, description: 'Description', },
      { id: 5, name: 'Basketbal', date: '2022-12-22', priority: 3, description: 'Description', },
      { id: 6, name: 'Volejbal', date: '2021-05-16', priority: 1, description: 'Description', },
      { id: 7, name: 'Praca', date: '2021-01-31', priority: 2, description: 'Description', },
    ];
    
    return {goals};
  }

  genId(goals: Goal[]): number {
    return goals.length > 0 ? Math.max(...goals.map(goal => goal.id)) + 1 : 1;

  }
}