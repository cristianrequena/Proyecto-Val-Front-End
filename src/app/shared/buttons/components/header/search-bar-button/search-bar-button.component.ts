import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-search-bar-button',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './search-bar-button.component.html',
  styleUrl: './search-bar-button.component.css'
})
export class SearchBarButtonComponent {

}
