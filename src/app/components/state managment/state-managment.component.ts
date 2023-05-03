import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Iemployee } from '../../interfaces/interfaces';
import {StoreService} from '../../services/store.service'


@Component({
  selector: 'app-state-managment',
  templateUrl: './state-managment.component.html',
  styleUrls: ['./state-managment.component.scss']
})
export class StateManagmentComponent implements OnInit {
employees$?:Observable<Iemployee[]>;
constructor(private storeService:StoreService) {};

ngOnInit(): void {
  this.employees$ = this.storeService.loadEmployees();
}
}

