import { Component } from '@angular/core';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { MainLogoComponent } from "./components/main-logo/main-logo.component";
import { UserMenuComponent } from "./components/user-menu/user-menu.component";
import { SearchBarButtonComponent } from "../../../shared/buttons/components/header/search-bar-button/search-bar-button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBarComponent, MainLogoComponent, UserMenuComponent, SearchBarButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
