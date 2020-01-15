import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebPhim2';

  onActivate(event) {
    window.scroll(0, 0);
    document.body.scrollTop = 0;
  }
}

// onActivate(event) {
//   window.scroll(0, 0);
// }

