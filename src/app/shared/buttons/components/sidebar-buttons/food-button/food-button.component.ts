import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-food-button',
  standalone: true,
  imports: [MatTooltip],
  templateUrl: './food-button.component.html',
  styleUrl: './food-button.component.css'
})
export class FoodButtonComponent {

}
