import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';
import { MergeMapComponent } from './components/merge-map/merge-map.component';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SwitchMapComponent,
    MergeMapComponent,

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
