import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { ChangeColorDirective } from './directives/change-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    PipesComponent,
    DirectivesComponent,
    PipesComponent,
    ChangeColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
