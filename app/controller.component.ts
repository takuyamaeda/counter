import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { CounterActions } from './actions/counter.actions';
import { WeekRecordActions } from './actions/week-record.actions';
import { AppState } from './reducers/index';

@Component({
  selector: 'controller',
  template: `
    <control-btn (onClick)="decrement()">-1</control-btn>
    <span class="reset" (click)="reset()">Reset</span>
    <control-btn (onClick)="increment()">+1</control-btn>
  `,
  styles: [`
    .reset {
      font-size: 0.5em;
    }
  `],
  host: {
    '[style.display]': `'flex'`,
    '[style.width]': `'100vw'`,
    '[style.justify-content]': `'space-around'`,
    '[style.align-items]': `'flex-end'`,
    '[style.bottom]': `'1em'`,
    '[style.position]': `'absolute'`
  }
})
export class ControllerComponent {
  constructor (
    private counterActions: CounterActions,
    private weekRecordActions: WeekRecordActions,
    private store: NgRedux<AppState>
  ) {}

  increment() {
    this.counterActions.increment();
  }

  decrement() {
    this.counterActions.decrement();
  }

  reset() {
    const state = this.store.getState();
    this.weekRecordActions.close(state.counter);
    this.counterActions.reset();
  }
}
