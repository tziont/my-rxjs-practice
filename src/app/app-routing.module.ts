import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from "./components/map/map.component";
import { SwitchMapComponent } from "./components/switch-map/switch-map.component";
import { StateManagmentComponent } from "./components/state managment/state-managment.component";

const routes: Routes = [
 { path: 'map', component:MapComponent },
 { path: 'switchMap', component:SwitchMapComponent },
 { path: 'stateManagment', component:StateManagmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {


}
