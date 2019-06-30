import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardModule, BoardService } from 'ng-go-board';
import { MatGridListModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BoardModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
