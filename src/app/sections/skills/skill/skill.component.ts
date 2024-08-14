import { Component, Input } from '@angular/core';
import { Skill } from './still.interface';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent {
  @Input() skill?: Skill;
  get level() {
    return (this.skill?.level || 0) * 10;
  }
}
