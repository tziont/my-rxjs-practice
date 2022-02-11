import { Component, OnInit } from '@angular/core';
import { Subject,BehaviorSubject} from 'rxjs';
import { mergeMap,map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  mySubject1  = new BehaviorSubject(5);
  mySubject2 = new BehaviorSubject(3);
  subject1Value$ = this.mySubject1.asObservable();
  subject2Value$ = this.mySubject2.asObservable();

  concat$ = this.subject1Value$.pipe(
   
    mergeMap( (val: any) => {    
    return this.subject2Value$.pipe(map((val2)=> val + val2 )); 
    }));
  
  constructor() { }

  ngOnInit(): void {}
  
  emitValue1(){
    let a = Math.floor(Math.random() * 10);
    this.mySubject1.next(a);
  }
  emitValue2(){
    let a = Math.floor(Math.random() * 10);
    this.mySubject2.next(a);
  }
}
