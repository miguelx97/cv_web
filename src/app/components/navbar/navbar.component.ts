import { Component, HostListener } from '@angular/core';
import { GlobalModules } from '../../global_modules';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [GlobalModules],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public isScrolled: boolean = false;
  get scrollClass() { return this.isScrolled ? 'scrolled' : 'top' }

  constructor(private languageSvc: LanguageService) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 120;
  }

  setLanguage(lang: string): void {
    this.languageSvc.setLanguage(lang);
  }

  scroll(el: string): void {
    const element: HTMLElement | null = document.getElementById(el);
    element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

}
