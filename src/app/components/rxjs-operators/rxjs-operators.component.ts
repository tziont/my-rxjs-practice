import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../../services/subjects.service';
import { Observable } from 'rxjs';
import { FormBuilder,FormControl,FormGroup} from "@angular/forms";

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit {
  data$:Observable<string>;
  form:FormGroup;
    
  constructor( private subjectsService:SubjectsService,
               private fb: FormBuilder){ }
  ngOnInit(): void {

    this.data$ = this.subjectsService.getObservableA();
    this.form = this.fb.group({
      stringCtrl: [''],
    })
  }
  insertString(a: string){
    this.subjectsService.streemA$.next(a);
  }
  changeString(){
    const newString = this.form.get('stringCtrl')?.value
    this.subjectsService.streemA$.next(newString);
  }
}
