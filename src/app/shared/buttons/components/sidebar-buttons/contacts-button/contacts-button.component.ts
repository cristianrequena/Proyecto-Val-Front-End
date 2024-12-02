import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-contacts-button',
  standalone: true,
  imports: [MatTooltip],
  templateUrl: './contacts-button.component.html',
  styleUrl: './contacts-button.component.css'
})
export class ContactsButtonComponent {

}
