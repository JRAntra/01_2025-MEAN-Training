import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsBoardComponent } from './jobs-board/jobs-board.component';
import { InterestedJobsBoardComponent } from './interested-jobs-board/interested-jobs-board.component';
import { HttpClientModule } from '@angular/common/http';
import { JobsCardComponent } from './jobs-board/jobs-card/jobs-card.component';
@NgModule({
  declarations: [
    AppComponent,
    JobsBoardComponent,
    InterestedJobsBoardComponent,
    JobsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }

