import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BoardService, Board } from './board.service';
import godash from 'godash';

export interface Move {
  x: number;
  y: number;
  color?: string;
  step?: number;
}

@Component({
  selector: 'go-board',
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
  // whether display the step number on stone or not
  @Input() showStep: boolean;
  // prevent click event or not
  @Input() disabled = false;
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
  // steps array
  steps: Array<Move>;

  constructor(
    private boardService: BoardService
  ) { }

  ngOnInit() {
    if (!this.dimensions) {
      // default go board settings
      this.dimensions = 19;
      this.stars = [{ x: 3, y: 3 }, { x: 3, y: 9 }, { x: 3, y: 15 }, { x: 9, y: 3 }, { x: 9, y: 9 }, { x: 9, y: 15 }, { x: 15, y: 3 }, { x: 15, y: 9 }, { x: 15, y: 15 }];
    }
    this.boardArray = Array(this.dimensions).fill(1);
    this.reset();
    this.boardService.getBoard().subscribe((board: Board) => {
      switch (board.action) {
        case 'reset':
          this.reset();
          break;
        case 'retract':
          this.retract();
          break;
        case 'disable':
          this.disable();
          break;
        case 'enable':
          this.enable();
          break;
        case 'normalColor':
          this.normalColor();
          break;
        case 'oneColor':
          this.oneColor(board.data.color);
          break;
        case 'addMove':
          this.addMove(board.data.x, board.data.y, board.data.color);
          break;
      }
    });
  }

  /************
    Functions that can be triggered from service
  ************/

  /**
   * Add move
   */
  addMove(x: number, y: number, color = null) {
    if (color) {
      this.color = color;
    }
    this.onClick(x, y);
  }

  /**
   * Reset the board
   * @param forRetract If this is for retract
   */
  reset(forRetract = false) {
    // initialise the next color
    if (this.next) {
      this.color = this.next;
    } else {
      if (this.moves.length) {
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
      this.steps = [];
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
    this.color = godash.oppositeColor(this.color);
  }

  /**
   * Retract back one move
   */
  retract() {
    this.reset(true);
    if (!this.movesHistory.length) {
      return;
    }
    const lastMove = this.movesHistory.pop();
    // pop steps list if it is the same with the last move from moves history
    if (this.steps.length && lastMove.x === this.steps[this.steps.length - 1].x && lastMove.y === this.steps[this.steps.length - 1].y) {
      this.steps.pop();
    }
    // add moves from moves history
    if (this.movesHistory.length) {
      this.movesHistory.forEach((move, i) => {
        this.board = godash.addMove(this.board, new godash.Coordinate(move.x, move.y), move.color);
      });
    }
    // set the next color to the color of last move
    this.color = lastMove.color;
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

  /**
   * Check if this coordinate is a star
   * @return boolean
   */
  isStar(x: number, y: number) {
    return this.stars.find(star => {
      return star.x === x && star.y === y;
    }) !== undefined;
  }

  /**
   * Next color
   */
  nextColor() {
    if (this.color === godash.BLACK) {
      return 'black';
    }
    return 'white';
  }

  /**
   * Get the cell classes
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

  /**
   * Get the step text for a coordinate
   * @return step number | ''
   */
  getStep(x: number, y: number) {
    const step = this.steps.slice().reverse().find(s => {
      return s.x === x && s.y === y;
    });
    if (step) {
      return step.step;
    }
    return '';
  }

  /**
   * On click event
   */
  onClick(x: number, y: number) {
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
    if (this.showStep) {
      this.steps.push({
        x: x,
        y: y,
        step: this.steps.length + 1
      });
    }
    if (!this.fixColor) {
      // change the next move color
      this.color = godash.oppositeColor(this.color);
    }
  }

}
