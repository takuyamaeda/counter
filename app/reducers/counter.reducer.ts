import { CounterActions } from '../actions/counter.actions';

const InitialState = 0;

export function counterReducer(state: number = InitialState, action: { type: string } ) {
  switch (action.type) {
    case CounterActions.INCREMENT_COUNTER:
      return state + 1;
    case CounterActions.DECREMENT_COUNTER:
      return state - 1;
    case CounterActions.RESET_COUNTER:
      return InitialState;
    default:
      return state;
  }
}
