import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { SubjectsService } from '../../services/subjects.service';
import { Observable} from 'rxjs';
import {  map } from 'rxjs/Operators';
import { FormBuilder,FormControl,FormGroup} from "@angular/forms";

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit {
  data$:any;
  form:FormGroup;
    
  constructor( private subjectsService:SubjectsService,
               private fb: FormBuilder){ }

  ngOnInit(): void {
    this.data$ = this.subjectsService.getState();
    this.form = this.fb.group({
      stringCtrl: [''],
    })
  }
  
  changeName(){
   const data ={...this.data$, name:'Tzion', phone: '0547-832276', foodList: ['wow', 'what?']}
   this.subjectsService.stateManagerSubject$.next(data);
  }

}
