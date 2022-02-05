import { Component } from '@angular/core';
import { JsonServerMockEndpointService } from './services/json-server-mock-endpoint.service';
import { Observable } from 'rxjs';
import { Photo } from './typs/photoInterface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  $data:Observable<string[]>;
  constructor(private mock:JsonServerMockEndpointService){
    this.$data = this.mock.getJsonServerMock();
  }

 title = 'RxJS';
 
}
