import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { AppState } from '../reducers';

@Injectable()
export class WeekRecordActions {
  static CLOSE_WEEK: string = 'CLOSE_WEEK';

  constructor(
    private store: NgRedux<AppState>
  ) {}

  close(counter: number): void {
    this.store.dispatch({
      type: WeekRecordActions.CLOSE_WEEK, 
      counter
    });
  }
}
