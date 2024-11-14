import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate: TranslateService, private router: Router) { }

  currentLang: string = 'en';

  initLanguage(): void {
    this.translate.addLangs(['es', 'en']);
    const lang: string = this.defaultLanguage();
    this.translate.setDefaultLang(lang);
    this.setLanguage(lang);
  }

  private defaultLanguage(): string {
    const availableLangs: string[] = this.translate.getLangs();
    const defaultLang: string = 'en';
    const urlLang: string | undefined = window.location.href.split('/')[3]
    const browserLang: string | undefined = this.translate.getBrowserLang();
    if (urlLang && availableLangs.includes(urlLang)) {
      return urlLang;
    } else if (browserLang && availableLangs.includes(browserLang)) {
      return browserLang;
    } else {
      return defaultLang;
    }
  }

  setLanguage(lang: string): void {
    this.currentLang = lang;
    this.router.navigate([lang]);
    this.translate.use(lang);
  }
}
