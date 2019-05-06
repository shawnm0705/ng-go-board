import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import godash from 'godash';

export interface Move {
  x: number;
  y: number;
  color?: string;
}

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  // dimensions of the board
  @Input() dimensions;
  // coordinates of stars
  @Input() stars: Array<Move>;
  // pre-exist moves
  @Input() moves: Array<Move>;
  // the color of next move
  @Input() next: string;
  // a move event
  @Output() move = new EventEmitter<Move>();
  // board object
  board: any;
  // board status array
  boardArray: Array<number>;

  constructor() { }

  ngOnInit() {
    if (!this.dimensions) {
      // default go board settings
      this.dimensions = 19;
      this.stars = [{ x: 3, y: 3 }, { x: 3, y: 9 }, { x: 3, y: 15 }, { x: 9, y: 3 }, { x: 9, y: 9 }, { x: 9, y: 15 }, { x: 15, y: 3 }, { x: 15, y: 9 }, { x: 15, y: 15 }];
    }
    this.boardArray = Array(this.dimensions).fill(1);
    // initialise the next color
    if (!this.next) {
      if (this.moves) {
        switch (this.moves[this.moves.length - 1].color.toUpperCase()) {
          case 'BLACK':
            this.next = godash.WHITE;
            break;
          case 'WHITE':
            this.next = godash.BLACK;
            break;
        }
      } else {
        this.next = godash.BLACK;
      }
    }
    // initialise the board
    this.board = new godash.Board(this.dimensions);
    // add pre-exist moves
    if (this.moves) {
      this.moves.forEach(move => {
        const color = move.color.toUpperCase() === 'BLACK' ? godash.BLACK : godash.WHITE;
        this.board = godash.addMove(this.board, new godash.Coordinate(move.x, move.y), color);
      });
    }
  }

  isStar(x, y) {
    return this.stars.find(star => {
      return star.x === x && star.y === y;
    }) !== undefined;
  }

  nextColor() {
    if (this.next === godash.BLACK) {
      return 'black';
    }
    return 'white';
  }

  /**
   * Get the cell classes
   * @param x Coordinate x
   * @param y Coordinate y
   * @return class string
   */
  cellClass(x: number, y: number) {
    let c = '';
    if (this.isStar(x, y)) {
      c = 'star ';
    }
    switch (this.board.moves.get(new godash.Coordinate(x, y))) {
      case godash.BLACK:
        c += 'black';
        break;
      case godash.WHITE:
        c += 'white';
        break;
    }
    return c;
  }

  onClick(x, y) {
    if (!godash.isLegalMove(this.board, new godash.Coordinate(x, y), this.next)) {
      return ;
    }
    // this coordinate already has stone
    if (this.board.moves.get(new godash.Coordinate(x, y), godash.EMPTY) !== godash.EMPTY) {
      return ;
    }
    this.board = godash.addMove(this.board, new godash.Coordinate(x, y), this.next);
    // trigger a move event
    this.move.emit({x: x, y: y, color: this.next});
    // change the next move color
    this.next = this.next === godash.BLACK ? godash.WHITE : godash.BLACK;
  }

}
