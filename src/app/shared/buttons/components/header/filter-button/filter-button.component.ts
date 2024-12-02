import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-filter-button',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './filter-button.component.html',
  styleUrl: './filter-button.component.css'
})
export class FilterButtonComponent {

}
