import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URI = 'https://floar-backend.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class FloarService {

  constructor(private http: HttpClient) { }

  getTeams() {
    return this.http.get(`${BASE_URI}/teams`)
  }

  editTeams(newTeams: any) {
    return this.http.put(`${BASE_URI}/teams`, {
      newTeams: newTeams
    })
  }

  getGames() {
    return this.http.get(`${BASE_URI}/games`)
  }
}
