import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-controller',
  template: '<div id="controller" (touchstart)="touchstart($event)" (touchend)="touchend($event)"></div>',
  styles: [`
    :host {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
    }

    #controller {
      height: 100%;
      width: 100%;
    }
  `]
})
export class PageControllerComponent {
  startX: number;

  constructor (private router: Router) {}

  touchstart(e: any) {
    const touch = e.changedTouches[0];
    this.startX = touch.clientX;
  }

  touchend(e: any) {
    const touch = e.changedTouches[0];
    const endX = touch.clientX;
    const type = ((this.startX - endX) > 0) ? 'left' : 'right';
    console.log(type);

    if (type === 'left') {
      this.router.navigate(['list']);
    } else {
      this.router.navigate(['']);
    }
  }
}
