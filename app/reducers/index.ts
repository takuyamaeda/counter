import { combineReducers } from 'redux';
const persistState = require('redux-localstorage');
import { counterReducer } from './counter.reducer';
import { weekRecordReducer, Record } from './week-record.reducer';

export interface AppState {
  counter?: number;
  weekRecord?: Record[];
};

export const rootReducer = combineReducers<AppState>({
  counter: counterReducer,
  weekRecord: weekRecordReducer
});

export const enhancers = [
  persistState('counter', { key: 'my-counter-app' })
];
