import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-medical-button',
  standalone: true,
  imports: [MatTooltip],
  templateUrl: './medical-button.component.html',
  styleUrl: './medical-button.component.css'
})
export class MedicalButtonComponent {

}
