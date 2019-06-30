import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Board {
  action: string;
  data?: any;
}

@Injectable()
export class BoardService {
  private subject = new Subject<Board>();

  constructor() { }

  getBoard(): Observable<any> {
    return this.subject.asObservable();
  }

  addMove(x: number, y: number, color = null) {
    this.subject.next({
      action: 'addMove',
      data: {
        x: x,
        y: y,
        color: color
      }
    });
  }

  reset() {
    this.subject.next({
      action: 'reset'
    });
  }

  retract() {
    this.subject.next({
      action: 'retract'
    });
  }

  disable() {
    this.subject.next({
      action: 'disable'
    });
  }

  enable() {
    this.subject.next({
      action: 'enable'
    });
  }

  normalColor() {
    this.subject.next({
      action: 'normalColor'
    });
  }

  oneColor(color: string) {
    this.subject.next({
      action: 'oneColor',
      data: {
        color: color
      }
    });
  }


}
