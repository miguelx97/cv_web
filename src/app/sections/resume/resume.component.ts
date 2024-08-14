import { Component } from '@angular/core';
import { GlobalModules } from '../../global_modules';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [GlobalModules, EducationComponent, ExperienceComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

}
