import { Component } from '@angular/core';

import { select } from 'ng2-redux';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'display',
  template: `
    <div class="wrapper">
      <span>{{count$ | async}}</span>
      <span class="append">,000</span>
    </div>
  `,
  styles: [`
    .wrapper {
      text-align: center;
    }
    .append {
      color: grey;
      font-size: .5em;
    }
  `],
  host: {
    '[style.top]': `'50%'`,
    '[style.left]': `'50%'`,
    '[style.position]': `'absolute'`,
    '[style.transform]': `'translate(-50%, -50%)'`,
    '[style.width]': `'100vw'`,
    '[style.font-size]': `'6rem'`
  }
})
export class DisplayComponent {
  @select('counter') count$: Observable<number>;
}
