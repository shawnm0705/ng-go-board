# NgGoBoard

[![npm version](https://badge.fury.io/js/ng-go-board.svg)](https://badge.fury.io/js/ng-go-board)
[![Build Status](https://travis-ci.org/shawnm0705/ng-go-board.svg?branch=master)](https://travis-ci.org/shawnm0705/ng-go-board)

An Angular component that display a [Go](https://en.wikipedia.org/wiki/Go_%28game%29) board.

This component depends on [godash](https://github.com/duckpunch/godash)

## Demo
[Demo Page](https://shawnm0705.github.io/ng-go-board/)

![Go](https://shawnm0705.github.io/ng-go-board/assets/go.png)

## Getting Started
Install `godash` via npm.

    npm install godash

Install `ng-go-board` via npm.

    npm install ng-go-board

Import `BoardModule` into your `app.module.ts`

```javascript
import { BoardModule } from 'ng-go-board';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

You can now use `<board>` in your html file.

`<board></board>`

## Properties

Board coordinate is from (0, 0) to (18, 18)

`<board>` component accepts 3 properties:
  
### `moves`
It defines pre-exists moves(stones) when initialising the board

It is an array of `{ x: number; y: number; color: string; }`

e.g. 
```html
<board
  [moves]="[
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
  ]"
></board>
```

### `next`
It defines the color of stone for the next move.

Valid colors are `black` and `white`

If no `next` provided, it will check the last move(stone) in `moves` array. If it is white, the next color will be black, otherwise the next color will be white.

If no `next` and no `moves` provided, the next color will be black by default.

e.g.

```html
<board
[next]="'black'"
></board>
```

### `move`
It is a move event that will trigger every time when a move happens. 

The `$event` is in type `{ x: number; y: number; color: string; }`

e.g.

```html
<board
(move)=onMove($event)
></board>
```
In `app.component.ts`
```javascript
onMove(event) {
  console.log('(', event.x, ', ', event.y, ') ', event.color);
}
```

