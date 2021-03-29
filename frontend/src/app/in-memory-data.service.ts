import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Goal } from './goal';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const goals = [
      { id: 1, name: 'Beh', datetime: '2021-10-01T12:33', priority: 4, description: 'Description',},
      { id: 2, name: 'Futbal', datetime: '2021-10-01T16:35', priority: 2, description: 'Description', },
      { id: 3, name: 'Cyklistika', datetime: '2021-10-11T12:00', priority: 4, description: 'Description', },
      { id: 4, name: 'Trening', datetime: '2021-10-02T20:48', priority: 5, description: 'Description', },
      { id: 5, name: 'Basketbal', datetime: '2022-12-22T10:37', priority: 3, description: 'Description', },
      { id: 6, name: 'Volejbal', datetime: '2021-05-16T13:00', priority: 1, description: 'Description', },
      { id: 7, name: 'Praca', datetime: '2021-01-31T01:05', priority: 2, description: 'Description', },
    ];
    
    return {goals};
  }

  genId(goals: Goal[]): number {
    return goals.length > 0 ? Math.max(...goals.map(goal => goal.id)) + 1 : 1;

  }
}