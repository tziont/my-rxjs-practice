import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotosStoreService } from 'src/app/services/photos-store.service';
import { Photo } from 'src/app/typs/photoInterface';

@Component({
  selector: 'photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {
photosList$:Observable<Photo[]>

  constructor(private photosService: PhotosStoreService) { }

  ngOnInit(): void {
this.getPhotos();
  }

getPhotos(){
this.photosList$ = this.photosService.PhotosObservable$;
}
}
