import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iemployee } from '../interfaces/interfaces'
import { BehaviorSubject, Observable, map, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
private subject = new BehaviorSubject<Iemployee[]>([]);

constructor(private http:HttpClient) {}
loadEmployees(){ 

return  this.http.get<Iemployee[]>('http://localhost:3000/employees')

}
}
