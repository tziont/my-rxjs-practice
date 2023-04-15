import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { Photo } from '../typs/photoInterface';

@Injectable({
  providedIn: 'root'
})
export class JsonServerMockEndpointService {

  constructor(private http: HttpClient) { }
url= 'https://jsonplaceholder.typicode.com/photos'
  getJsonServerMock(){
    return this.http.get<Photo[]>(`${this.url}`).pipe(map((res: Photo[]) => {
      return res.map(photo => photo.albumId )
    }));
  }
}
