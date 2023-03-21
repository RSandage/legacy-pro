import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'legacy-pro';

  scroll(element: HTMLElement) {
    element.scrollIntoView({behavior: 'smooth'})
  }
}
