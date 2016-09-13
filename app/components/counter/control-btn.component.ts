import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'control-btn',
  template: '<div class="control-btn" (click)="onClickAction()"><span class="control-btn__text"><ng-content></ng-content></span></div>',
  styles: [`
    .control-btn {
      border-radius: 7rem;
      height: 7rem;
      width: 7rem;
      position: relative;
      border: solid 1px #000;
      cursor: pointer;
    }
    .control-btn__text {
      position: absolute;
      transform: translateX(-50%) translateY(-50%);
      top: 50%;
      left: 50%;
      z-index: 1000;
    }
  `]
})
export class ControlBtnComponent {
  @Output() onClick = new EventEmitter<string>();

  onClickAction() {
    this.onClick.emit('');
  }
}
