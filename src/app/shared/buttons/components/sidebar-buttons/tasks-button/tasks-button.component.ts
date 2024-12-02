import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-tasks-button',
  standalone: true,
  imports: [MatTooltip],
  templateUrl: './tasks-button.component.html',
  styleUrl: './tasks-button.component.css'
})
export class TasksButtonComponent {

}
