import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-finance-button',
  standalone: true,
  imports: [MatTooltip],
  templateUrl: './finance-button.component.html',
  styleUrl: './finance-button.component.css'
})
export class FinanceButtonComponent {

}
