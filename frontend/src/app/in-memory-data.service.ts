import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Goal } from './goal';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const goals = [
      { id: 1, name: 'Beh', datetime: '01. 10. 2021 12:00', priority: 50, description: 'Description',},
      { id: 2, name: 'Futbal', datetime: '01. 10. 2021 12:00', priority: 50, description: 'Description', },
      { id: 3, name: 'Cyklistika', datetime: '01. 10. 2021 12:00', priority: 50, description: 'Description', },
      { id: 4, name: 'Trening', datetime: '01. 10. 2021 12:00', priority: 50, description: 'Description', },
      { id: 5, name: 'Basketbal', datetime: '01. 10. 2021 12:00', priority: 50, description: 'Description', },
      { id: 6, name: 'Volejbal', datetime: '01. 10. 2021 12:00', priority: 50, description: 'Description', },
      { id: 7, name: 'Praca', datetime: '01. 10. 2021 12:00', priority: 50, description: 'Description', },
    ];
    
    return {goals};
  }

  genId(goals: Goal[]): number {
    return goals.length > 0 ? Math.max(...goals.map(goal => goal.id)) + 1 : 1;

  }
}