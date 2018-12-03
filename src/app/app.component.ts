import { Component } from '@angular/core';
import {
  trigger, style, state, transition, animate
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('menuToggle', [
      state('open', style({ 
        transform: 'translateX(0)'})),
      state('close', style({ 
        transform: 'translateX(-150%)'})),
      state('menuOpen', style({ 
        display: 'none',        
      })),
      state('menuClosed', style({ 
        display: 'block',
        })),
      state('slideMenuButtonRight', style({
        transform: 'translateX(250%)  rotate(180deg)'})),
        state('slideMenuButtonBack', style({
          transform: 'translateX(0)'})),        
      transition('open <=> close', [
        animate('200ms 20ms ease-in')
      ]),
      transition('slideMenuButtonBack <=> slideMenuButtonRight', animate('0.25s ease-in'))
    ]
    )
  ]
})
export class AppComponent {
  title = 'Grepsoft';
  isOpen = false;  

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
