import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Goal } from './goal';
import { User } from './user';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GoalService {

  private goalsUrl = 'http://localhost:8080/api/goals'; //'http://localhost:8080/api/goals'
  token: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private http: HttpClient,
    private readonly httpClient: HttpClient) { }


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
    return this.http.post(this.goalsUrl, goal, this.httpOptions);
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

  getToken(): string {
    return this.token;
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }

  login(username: string, password: string): Observable<any> {
    const info = btoa(`${username}:${password}`);
    const token = `Basic ${info}`;
    const options = {
      headers: new HttpHeaders({
        Authorization: token,
        'X-Requested-With' : 'XMLHttpRequest'
      }),
      withCredentials: true
    };
    return this.httpClient.get('http://localhost:8080/user', options).pipe(
      tap(() => this.token = token)
    );
  }

  logout(): void {
    this.token = null;
  }

  register(username: string, password: string, name: string, surname: string): Observable<any> {
    const user = { username, password, name, surname };
    return this.http.post(`${this.goalsUrl}/registration`, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.goalsUrl);
  }
}
