import { Component } from '@angular/core';
import { HeaderComponent } from './core/components/header/header.component';
import { SidebarMenuComponent } from "./core/components/sidebar-menu/sidebar-menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SidebarMenuComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto Val';
}
