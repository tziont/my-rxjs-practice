import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, map} from 'rxjs';
import {Iemployee} from  "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {
  constructor(private http: HttpClient) {
  }

  getEmployeesResponse(){
    return this.http.get<Iemployee[]>(
      'http://localhost:3000/employees');
  }

}
