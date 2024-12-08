import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onLogin(event: Event): void {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario
    if (this.email && this.password) {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      // Aquí puedes agregar lógica para autenticación o llamar a un servicio
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}
