import { Component, OnInit } from '@angular/core';
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
      y: 5,
      color: 'black'
    },
    {
      x: 5,
      y: 5,
      color: 'white'
    },
    {
      x: 3,
      y: 4,
      color: 'black'
    },
    {
      x: 4,
      y: 5,
      color: 'white'
    }
  ];

  ngOnInit() {
    this.movesHistory = [];
  }

  onMove(event) {
    this.movesHistory.push('(' + event.x + ', ' + event.y + ') ' + event.color);
  }
}
