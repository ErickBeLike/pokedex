import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correoIngresado: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Este método se llama automáticamente cuando se inicializa el componente
    // Aquí puedes realizar cualquier lógica de inicialización necesaria
  }

  navigateToWelcome() {
    this.router.navigate(['/welcome', { correo: this.correoIngresado }]);
  }

}