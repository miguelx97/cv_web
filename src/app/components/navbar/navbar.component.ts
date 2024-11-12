import { Component, HostListener } from '@angular/core';
import { GlobalModules } from '../../global_modules';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [GlobalModules],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 120;
  }

}
