import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';
import { StateManagmentComponent } from './components/state managment/state-managment.component';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SwitchMapComponent,
    StateManagmentComponent,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
