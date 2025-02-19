import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaskPhoneNumPipe } from './mask-phone-num.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { SibilingsComponent } from './sibilings/sibilings.component';


@NgModule({
  declarations: [
    AppComponent,
    MaskPhoneNumPipe,
    ParentComponent,
    ChildComponent,
    SibilingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
