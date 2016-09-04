import { WeekRecordActions } from '../actions/week-record.actions';

export interface Record {
  open_date: Date;
  close_date: Date;
  counter: number;
}

const InitialState: Record[] = [{
  open_date: new Date(),
  close_date: null,
  counter: 0
}];

export function weekRecordReducer(state: Record[] = InitialState, action: { type: string, counter?: number } ) {
  switch (action.type) {
    case WeekRecordActions.CLOSE_WEEK:
      const records: Record[] = state.slice(0, -1),
        [lastRecord] = state.slice(-1),
        newRecord: Record = {
          open_date: new Date(),
          close_date: null,
          counter: 0
        };
        lastRecord.close_date = new Date();
        lastRecord.counter = action.counter;

      return [...records, lastRecord, newRecord];
    default:
      return state;
  }
}
