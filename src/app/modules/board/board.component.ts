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
  // the color of next move (passed from parent)
  @Input() next: string;
  // a move event
  @Output() move = new EventEmitter<Move>();
  // board object
  board: any;
  // board status array
  boardArray: Array<number>;
  // the color of the next stone (used inside this component)
  color: string;
  // use one color for every move or not
  fixColor: boolean;
  // move history array
  movesHistory: Array<Move>;
  // prevent click event
  disabled = false;

  constructor() { }

  ngOnInit() {
    if (!this.dimensions) {
      // default go board settings
      this.dimensions = 19;
      this.stars = [{ x: 3, y: 3 }, { x: 3, y: 9 }, { x: 3, y: 15 }, { x: 9, y: 3 }, { x: 9, y: 9 }, { x: 9, y: 15 }, { x: 15, y: 3 }, { x: 15, y: 9 }, { x: 15, y: 15 }];
    }
    this.boardArray = Array(this.dimensions).fill(1);
    this.reset();
  }

  /************
    Functions that can be triggered from parent component
  ************/

  /**
   * Reset the board
   * @param forRetract If this is for retract
   */
  reset(forRetract = false) {
    // initialise the next color
    if (this.next) {
      this.color = this.next;
    } else {
      if (this.moves) {
        switch (this.moves[this.moves.length - 1].color.toUpperCase()) {
          case 'BLACK':
            this.color = godash.WHITE;
            break;
          case 'WHITE':
            this.color = godash.BLACK;
            break;
        }
      } else {
        this.color = godash.BLACK;
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
    if (!forRetract) {
      this.movesHistory = [];
    }
  }

  /**
   * Use only one color for every move
   * @param color The color of moves
   */
  oneColor(color: string) {
    this.fixColor = true;
    this.color = color === 'white' ? godash.WHITE : godash.BLACK;
  }

  /**
   * Use normal color change rule
   */
  normalColor() {
    this.fixColor = false;
  }

  /**
   * Retract back one move
   */
  retract() {
    this.reset(true);
    this.movesHistory.pop();
    if (this.movesHistory) {
      this.movesHistory.forEach(move => {
        this.board = godash.addMove(this.board, new godash.Coordinate(move.x, move.y), move.color);
      });
      this.color = godash.oppositeColor(this.movesHistory[this.movesHistory.length - 1].color);
    }
  }

  /**
   * Not allow clicking
   */
  disable() {
    this.disabled = true;
  }

  /**
   * Allow clicking
   */
  enable() {
    this.disabled = false;
  }

  /************
    Functions that are used inside this component only
  ************/

  isStar(x, y) {
    return this.stars.find(star => {
      return star.x === x && star.y === y;
    }) !== undefined;
  }

  nextColor() {
    if (this.color === godash.BLACK) {
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
    if (this.disabled) {
      return ;
    }
    if (!godash.isLegalMove(this.board, new godash.Coordinate(x, y), this.color)) {
      return ;
    }
    // this coordinate already has stone
    if (this.board.moves.get(new godash.Coordinate(x, y), godash.EMPTY) !== godash.EMPTY) {
      return ;
    }
    this.board = godash.addMove(this.board, new godash.Coordinate(x, y), this.color);
    // trigger a move event
    this.move.emit({x: x, y: y, color: this.color});
    this.movesHistory.push({x: x, y: y, color: this.color});
    if (!this.fixColor) {
      // change the next move color
      this.color = godash.oppositeColor(this.color);
    }
  }

}
