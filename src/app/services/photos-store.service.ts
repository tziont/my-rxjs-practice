import { Injectable , OnInit} from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Photo } from '../typs/photoInterface';
import { HttpClient } from '@angular/common/http';
import {map, tap } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class PhotosStoreService implements OnInit{
  url= 'https://jsonplaceholder.typicode.com/photos'
  private storeSubject = new BehaviorSubject<Photo[]>([]);
  PhotosObservable$ = this.storeSubject.asObservable();
 loadAllPhotos() {
    this.http.get<Photo[]>(`${this.url}`).pipe(map((res) => res),tap( photos => this.storeSubject.next(photos)));
   }
  constructor(private http:HttpClient) { 
    
  }
ngOnInit(): void {
  this.loadAllPhotos();
}
 
}
