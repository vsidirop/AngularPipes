import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipesModule } from './pipes/pipes.module';
import { PipesExcampleComponent } from './pipes-excample/pipes-excample.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesExcampleComponent
  ],
  imports: [
    BrowserModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
