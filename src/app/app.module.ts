import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators.component';
import { SubjectComponent } from './components/subject/subject.component';




@NgModule({
  declarations: [
    AppComponent,
    RxjsOperatorsComponent,
    SubjectComponent,
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
