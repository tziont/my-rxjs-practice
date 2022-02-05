import { Component, OnInit } from '@angular/core';
import { JsonServerMockEndpointService } from '../../services/json-server-mock-endpoint.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit {
  $data:Observable<string[]>;
 
    
  constructor(private mock:JsonServerMockEndpointService){
    this.$data = this.mock.getJsonServerMock();
  }
  ngOnInit(): void {
  }

}
