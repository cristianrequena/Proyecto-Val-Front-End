import { Component, HostListener, Input } from '@angular/core';
import { LogoutButtonComponent } from "../../../logout-button/logout-button.component";

@Component({
  selector: 'app-account-dropdown',
  standalone: true,
  imports: [LogoutButtonComponent],
  templateUrl: './account-dropdown.component.html',
  styleUrl: './account-dropdown.component.css'
})
export class AccountDropdownComponent {
  isOpen: boolean = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.isOpen = false;
    }
  }
}
