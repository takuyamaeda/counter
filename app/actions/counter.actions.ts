import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { AppState } from '../reducers';

@Injectable()
export class CounterActions {
  static INCREMENT_COUNTER: string = 'INCREMENT_COUNTER';
  static DECREMENT_COUNTER: string = 'DECREMENT_COUNTER';
  static RESET_COUNTER: string = 'RESET_COUNTER';

  constructor(
    private store: NgRedux<AppState>
  ) {}

  increment(): void {
    this.store.dispatch({type: CounterActions.INCREMENT_COUNTER});
  }

  decrement(): void {
    this.store.dispatch({type: CounterActions.DECREMENT_COUNTER});
  }

  reset(): void {
    this.store.dispatch({type: CounterActions.RESET_COUNTER});
  }
}
