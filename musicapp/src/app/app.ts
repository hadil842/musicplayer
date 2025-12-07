import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Maincomponent } from "./researchcomponent/maincomponent";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Maincomponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('project');
}
