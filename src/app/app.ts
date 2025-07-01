import { Component } from '@angular/core';
import { EventDispatcher } from '@angular/core/primitives/event-dispatch';
import { RouterOutlet } from '@angular/router';
import { EventDisplay } from './event-display/event-display';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventDisplay],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'event-ticket-app';
}
