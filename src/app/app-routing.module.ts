import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from "./components/map/map.component";
import { SwitchMapComponent } from "./components/switch-map/switch-map.component";
import { MergeMapComponent } from "./components/merge-map/merge-map.component";

const routes: Routes = [
 { path: 'map', component:MapComponent },
 { path: 'switchMap', component:SwitchMapComponent },
  { path: 'mergeMap', component:MergeMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {


}
