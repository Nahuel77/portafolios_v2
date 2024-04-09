import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public router: Router) {

  }
  onHome() {
    this.router.navigate(['./content/home']);
  }
  onEducation() {
    this.router.navigate(['./content/education']);
  }
  onProyects() {
    this.router.navigate(['./content/proyects']);
  }
  onContact() {
    this.router.navigate(['./content/contact']);
  }
}
