import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Goal } from './goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  private goalsUrl = 'http://localhost:8080/api/goals'; //'http://localhost:8080/api/goals'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private http: HttpClient) { }


  getGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.goalsUrl);
  }

  getGoal(id: number): Observable<Goal> {
    const url = `${this.goalsUrl}/${id}`;
    return this.http.get<Goal>(url);
  }

  addGoal(goal: Goal): Observable<Goal> {
    return this.http.post<Goal>(this.goalsUrl, goal, this.httpOptions);
  }

  updateGoal(goal: Goal): Observable<any> {
    return this.http.put(this.goalsUrl, goal, this.httpOptions);
  }

  deleteGoal(goal: Goal | number): Observable<Goal> {
    const id = typeof goal === 'number' ? goal : goal.id;
    const url = `${this.goalsUrl}/${id}`;
    return this.http.delete<Goal>(url, this.httpOptions);
  }

  searchGoals(term: string): Observable<Goal[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Goal[]>(`${this.goalsUrl}/?name=${term}`)
  }
}
