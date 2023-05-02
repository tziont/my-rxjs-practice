import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, of, from} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
// BehaviorSubject 
streemA$= new BehaviorSubject('a');

// Subject
streemB$ = new Subject();

// asObservable
observableA$ = this.streemA$.asObservable();
observableB$ = this.streemB$.asObservable();

// Using the of method to create an observable from a set of values:
observableC$ = of('hello', {world: 'rrr', yyy: 'ppp'});

stateManagerSubject$ = new BehaviorSubject({
  name:'',
  phone:'',
  foodList:[]
});

stateObservable$ = this.stateManagerSubject$.asObservable();

// Using the from method to create an observable from an array:
observableD$ = from(['hello', 'wow', 'uuu']);

  constructor() {}

  getObservableA(){
    return this.observableA$
  }
  getObservableB(){
    return this.observableB$
  }
  getObservableC(){
    return this.observableC$
  }
  getObservableD(){
    return this.observableD$
  }
  getState(){
    return this.stateObservable$
  }
  
  
}

