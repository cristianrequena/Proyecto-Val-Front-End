import { Component } from '@angular/core';
import { HomeButtonComponent } from "../../../shared/buttons/components/sidebar-buttons/home-button/home-button.component";
import { MedicalButtonComponent } from "../../../shared/buttons/components/sidebar-buttons/medical-button/medical-button.component";
import { TasksButtonComponent } from '../../../shared/buttons/components/sidebar-buttons/tasks-button/tasks-button.component';
import { FoodButtonComponent } from "../../../shared/buttons/components/sidebar-buttons/food-button/food-button.component";
import { NotesButtonComponent } from "../../../shared/buttons/components/sidebar-buttons/notes-button/notes-button.component";
import { GoalsButtonComponent } from "../../../shared/buttons/components/sidebar-buttons/goals-button/goals-button.component";
import { ContactsButtonComponent } from "../../../shared/buttons/components/sidebar-buttons/contacts-button/contacts-button.component";
import { VehiclesButtonComponent } from "../../../shared/buttons/components/sidebar-buttons/vehicles-button/vehicles-button.component";
import { FinanceButtonComponent } from '../../../shared/buttons/components/sidebar-buttons/finance-button/finance-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [RouterLink , HomeButtonComponent, TasksButtonComponent, MedicalButtonComponent, FoodButtonComponent, NotesButtonComponent, GoalsButtonComponent, ContactsButtonComponent, VehiclesButtonComponent, FinanceButtonComponent],
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent {
  
}
