import { Component, OnInit } from '@angular/core';
import { BoardService } from 'ng-go-board';
import godash from 'godash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movesHistory: Array<string>;
  moves = [
    {
      x: 3,
      y: 15,
      color: 'black'
    },
    {
      x: 15,
      y: 15,
      color: 'white'
    },
    {
      x: 3,
      y: 3,
      color: 'black'
    },
    {
      x: 15,
      y: 3,
      color: 'white'
    }
  ];
  next = 'black';
  showStep = false;

  constructor(
    public board: BoardService
  ) { }

  ngOnInit() {
    this.reset();
  }

  onMove(event) {
    this.movesHistory.push('(' + event.x + ', ' + event.y + ') ' + event.color);
  }

  reset() {
    this.movesHistory = [];
  }

  retract() {
    this.movesHistory.pop();
  }
}
