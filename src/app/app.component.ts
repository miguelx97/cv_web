import { Component } from '@angular/core';
import { HeaderComponent } from './sections/header/header.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ResumeComponent } from './sections/resume/resume.component';
import { AboutComponent } from './sections/about/about.component';
import { BackgroundComponent } from './components/background/background.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './sections/footer/footer.component';
import { LanguageService } from './services/language.service';

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
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title = 'CV_web';
  constructor(private languageSvc: LanguageService) {
    this.languageSvc.initLanguage();
  }

}