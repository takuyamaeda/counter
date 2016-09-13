import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgRedux } from 'ng2-redux';
import { CounterActions } from './actions/counter.actions';
import { WeekRecordActions } from './actions/week-record.actions';
import { AppState, rootReducer, enhancers } from './reducers/index';
import { routing, appRoutingProviders } from './routes';

import * as Components  from './components';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [
    ...(Object.keys(Components).map(key => Components[key]))
  ],
  providers: [
    NgRedux,
    CounterActions,
    WeekRecordActions,
    appRoutingProviders
  ],
  bootstrap: [ Components.AppComponent ]
})
export class AppModule {
  constructor(
    private store: NgRedux<AppState>
  ) {
    this.store.configureStore(
      rootReducer,
      {},
      [],
      [...enhancers]
    );
  }
}
