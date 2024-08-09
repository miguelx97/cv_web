import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './sections/header/header.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { TitleComponent } from './components/title/title.component';
import { AlertComponent } from 'ngx-bootstrap/alert';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SkillsComponent, AlertComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title = 'CV_web';
}
