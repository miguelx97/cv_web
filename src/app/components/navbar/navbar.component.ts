import { Component, HostListener } from '@angular/core';
import { GlobalModules } from '../../global_modules';
import { LanguageService } from '../../services/language.service';
import { openExternalLink } from '../../common/utils';

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

  downLoadCV(): void {

    const cvByLang: { [key: string]: string } = {
      'en': 'https://drive.google.com/file/d/11w_-qmwmJQvpKPcrFDC4offy8f_RFSQq/view?usp=drive_link',
      'es': 'https://drive.google.com/file/d/183_lKXRNLuuaSsvkhLmpOz9JYCLLbC-B/view?usp=drive_link'
    }

    const link: string = cvByLang[this.languageSvc.currentLang];

    openExternalLink(link);
  }

  openLink = openExternalLink;
}
