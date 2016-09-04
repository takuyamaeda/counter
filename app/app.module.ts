import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgRedux } from 'ng2-redux';
import { CounterActions } from './actions/counter.actions';
import { WeekRecordActions } from './actions/week-record.actions';
import { AppState, rootReducer, enhancers } from './reducers/index';

import { AppComponent }  from './app.component';
import { ControllerComponent }  from './controller.component';
import { ControlBtnComponent }  from './control-btn.component';
import { DisplayComponent } from './display.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    ControllerComponent,
    ControlBtnComponent,
    DisplayComponent
  ],
  providers: [
    NgRedux,
    CounterActions,
    WeekRecordActions
  ],
  bootstrap: [ AppComponent ]
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
