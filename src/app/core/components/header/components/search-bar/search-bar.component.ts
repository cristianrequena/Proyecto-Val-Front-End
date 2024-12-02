import { Component } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SearchBarButtonComponent } from '../../../../../shared/buttons/components/header/search-bar-button/search-bar-button.component';
import { MenuButtonComponent } from "../../../../../shared/buttons/components/header/menu-button/menu-button.component";
import { FilterButtonComponent } from "../../../../../shared/buttons/components/header/filter-button/filter-button.component";
import { AccountButtonComponent } from "../../../../../shared/buttons/components/header/account-button/account-button.component";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [MatTooltipModule, SearchBarButtonComponent, MenuButtonComponent, FilterButtonComponent, AccountButtonComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

}
