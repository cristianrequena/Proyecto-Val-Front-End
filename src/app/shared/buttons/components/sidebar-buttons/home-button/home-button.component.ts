import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-home-button',
  standalone: true,
  imports: [MatTooltip],
  templateUrl: './home-button.component.html',
  styleUrl: './home-button.component.css'
})
export class HomeButtonComponent {

}
