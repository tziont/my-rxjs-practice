import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';





@NgModule({
  declarations: [
    AppComponent,
    RxjsOperatorsComponent,
    ChildComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule , 
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
