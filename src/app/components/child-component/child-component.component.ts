import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {
  data$: Observable<string>
  
  constructor(private subjectsService:SubjectsService) { }

  ngOnInit(): void {
    this.data$ = this.subjectsService.getObservableA();
  }

}
