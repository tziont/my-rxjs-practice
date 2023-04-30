import {Component, OnInit} from '@angular/core';
import {HttpRequestsService,} from "../../services/http-requests.service";
import{Iemployee} from "../../interfaces/interfaces";
import {map,Observable} from "rxjs";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  employees$?: Observable<Iemployee[]>;

observableExample=`
   [
      {
        "id": 1,
        "name": "Tony dtark",
        "email": "tony@mcu.com",
        "phone": "001-123-4567"
      },
      {
        "id": 2,
        "name": "Rami Tucko",
        "email": "Rami@mcu.com",
        "phone": "001-888-4567"
      }
    ]`;
manipulation=`
    this.employees$ = this.restApi.getEmployeesResponse().pipe(map(response => response.map(item => ({
      ...item,
      searchKey: [item.name],

    } as Iemployee)) ));`

  constructor(public restApi: HttpRequestsService) {
  };

  ngOnInit() {
    this.employees$ = this.restApi.getEmployeesResponse().pipe(map(response => response.map(item => ({
      ...item,
      searchKey: [item.name],

    } as Iemployee)) ));
  }

}
// "employees": [
//   {
//       "id": 1,
//       "name": "Tony dtark",
//       "email": "tony@mcu.com",
//       "phone": "001-123-4567"
//     },
//     {
//       "id": 2,
//       "name": "Rami Tucko",
//       "email": "Rami@mcu.com",
//       "phone": "001-888-4567"
//     }
//   ]
