import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';

const routes: Routes = [
  { path: 'rxjs-operators', component: RxjsOperatorsComponent },
  { path: 'photos-list', component: PhotosListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

 }
