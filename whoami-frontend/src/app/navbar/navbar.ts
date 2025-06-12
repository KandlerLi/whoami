import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeSwitch } from './theme-switch/theme-switch';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterModule,
    ThemeSwitch
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  menuOpen = false;
  items = [
    {link: "/about", name: "About"},
    {link: "/skills", name: "Skills"},
    {link: "/projects", name: "Projects"},
    {link: "/contact", name: "Contact"},
  ]

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
