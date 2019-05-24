import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardService } from './board.service';
export { BoardService } from './board.service';

@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    BoardService
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule {}
