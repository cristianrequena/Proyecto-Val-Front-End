import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AccountDropdownComponent } from './components/account-dropdown/account-dropdown.component';

@Component({
  selector: 'app-account-button',
  standalone: true,
  imports: [MatTooltipModule, AccountDropdownComponent],
  templateUrl: './account-button.component.html',
  styleUrl: './account-button.component.css'
})
export class AccountButtonComponent {

}
