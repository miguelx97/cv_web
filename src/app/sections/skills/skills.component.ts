import { Component } from '@angular/core';
import { GlobalModules } from '../../global_modules';
import { SkillComponent } from './skill/skill.component';
import { Skill } from './skill/still.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [GlobalModules, SkillComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Ionic', icon: 'ionic', level: 9 },
    { name: 'Angular', icon: 'angular', level: 9 },
    { name: 'Flutter', icon: 'flutter', level: 8 },
    { name: 'Firebase', icon: 'firebase', level: 9 },
    { name: 'Kotlin', icon: 'kotlin', level: 5 },
    { name: 'Node JS', icon: 'nodejs', level: 5 },
    { name: 'Java', icon: 'java', level: 6 },
    { name: 'Figma', icon: 'figma', level: 5 },
    // { name: 'Wordpress', icon: 'wordpress', level: 7 },
  ];
}
