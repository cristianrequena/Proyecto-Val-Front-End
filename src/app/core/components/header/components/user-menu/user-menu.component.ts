import { Component } from '@angular/core';
import { GroupsMembersComponent } from '../../../../../shared/buttons/components/header/groups-members/groups-members.component';
import { AccountButtonComponent } from '../../../../../shared/buttons/components/header/account-button/account-button.component';


@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [GroupsMembersComponent, AccountButtonComponent],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css'
})
export class UserMenuComponent {

}
