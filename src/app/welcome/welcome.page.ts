import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  correoIngresado: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const correoParam = this.route.snapshot.paramMap.get('correo');
    this.correoIngresado = correoParam ? correoParam : ''; 
  }

  cerrarSesion() {
    this.router.navigate(['/login']);
  }

  pokedex() {
    this.router.navigate(['/home']);
  }

}