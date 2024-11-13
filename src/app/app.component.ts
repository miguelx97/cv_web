import { Component } from '@angular/core';
import { HeaderComponent } from './sections/header/header.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ResumeComponent } from './sections/resume/resume.component';
import { AboutComponent } from './sections/about/about.component';
import { BackgroundComponent } from './components/background/background.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {
  TranslateService,
} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SkillsComponent,
    ProjectsComponent,
    ResumeComponent,
    AboutComponent,
    BackgroundComponent,
    NavbarComponent
  ],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title = 'CV_web';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);
    const lang: string = this.setLanguage();
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  private setLanguage(): string {
    const availableLangs: string[] = this.translate.getLangs();
    const defaultLang: string = 'en';
    const browserLang = this.translate.getBrowserLang();

    if (!browserLang) return defaultLang;
    else if (availableLangs.includes(browserLang)) {
      return browserLang;
    } else {
      return defaultLang;
    }
  }
}