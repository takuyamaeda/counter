import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { Record } from '../../reducers/week-record.reducer';

@Component({
  selector: 'record-list',
  template: `
    <h2 class="list-title">履歴</h2>
    <record-line *ngFor="let rec of weekRecords | async" [record]="rec"></record-line>
  `,
  styles: [`
    :host {
      font-size: 1rem;
    }

    .list-title {
      text-align: center;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  `]
})
export class RecordListComponent {
  @select(['weekRecord']) weekRecords: Observable<Record[]>;

  constructor () {}
}
