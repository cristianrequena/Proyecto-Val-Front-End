import { CommonModule } from '@angular/common';
import { Component, signal, ViewEncapsulation } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCalendar, MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatCalendar, MatDatepickerModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None,
})

export class HomeComponent {
  today: string;
  selected = signal<Date | null>(null);

  constructor() {
    const userLang = navigator.language || navigator.languages[0] || 'es-ES';
    console.log(userLang)
    const formatter = new Intl.DateTimeFormat(userLang, { month: 'long', day: 'numeric' });
    const formattedDate = formatter.format(new Date()).replace(' de ', ', ');

    this.today = formattedDate.replace(/, (\w)/, (_, letter) => `, ${letter.toUpperCase()}`);
  }
}
