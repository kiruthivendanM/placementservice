import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = 'http://localhost:8080';  // Adjust this to the actual backend API URL

  constructor(private http: HttpClient) {}

  // Method to register a new user
  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.API_URL}/users`, userData);
  }

  // Method to get all users
  getUsers(): Observable<any> {
    return this.http.get(`${this.API_URL}/users`);
  }

  // Method to delete a user by ID
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/users/${userId}`);
  }

  // Method to update a user by ID
  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.API_URL}/users/${user.id}`, user);
  }
}
