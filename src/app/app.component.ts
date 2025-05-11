import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldAppComponent } from './hello-world-app/hello-world-app.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorldAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-1';
}
