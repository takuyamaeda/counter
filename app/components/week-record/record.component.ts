import { Component, Input } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { Record } from '../../reducers/week-record.reducer';

@Component({
  selector: 'record-line',
  template: `
    <div class="record-wrapper">
      <div class="record-data">{{ record.open_date | date:'yyyy/MM/dd' }}</div>
      <div class="record-data">{{ record.close_date | date:'yyyy/MM/dd' }}</div>
      <div class="record-data">{{ record.counter * 1000 | currency:'JPY':true }}</div>
    </div>
  `,
  styles: [`
    .record-wrapper {
      display: flex;
      justify-content: space-between;
      border-top: solid 1px #DDD;
      margin-top: 5px;
      padding-top: 5px;
    }
    .record-data {
      padding: 0 20px;
    }
  `]
})
export class RecordComponent {
  @Input() record: Record;
}
