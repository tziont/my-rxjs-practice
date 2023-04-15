import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
streemA$= new BehaviorSubject('a');
observaleA$ = this.streemA$.asObservable();


  constructor() {}

  getObservableA(){
    return this.observaleA$
  }
  
}

