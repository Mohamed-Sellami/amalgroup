import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',

  templateUrl: './navbar.component.html',
})
export class NavbarComponent {


  isMenuOpen = false;



  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden');
    }
  }
}
