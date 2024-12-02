import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.css'
})
export class MenuButtonComponent {

}
