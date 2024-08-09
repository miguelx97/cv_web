import { Component } from '@angular/core';
import { GlobalModules } from '../../global_modules';
import { SkillComponent } from './skill/skill.component';
import { Skill } from './skill/still.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [GlobalModules, SkillComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  //skills: Skill[] = ['Ionic', 'Angular', 'Flutter', 'Firebase', 'Node JS', 'Java', 'Figma', 'Wordpress'];

  skills: Skill[] = [
    { name: 'Ionic', icon: 'ionic', level: 90 },
    { name: 'Angular', icon: 'angular', level: 90 },
    { name: 'Flutter', icon: 'flutter', level: 80 },
    { name: 'Firebase', icon: 'firebase', level: 90 },
    { name: 'Node JS', icon: 'nodejs', level: 80 },
    { name: 'Java', icon: 'java', level: 70 },
    { name: 'Figma', icon: 'figma', level: 80 },
    { name: 'Wordpress', icon: 'wordpress', level: 70 }
  ];

}