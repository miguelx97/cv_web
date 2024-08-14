import { Component, Input } from '@angular/core';
import { Experience } from '../experience';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.scss',
})
export class ExperienceItemComponent {
  @Input() experience?: Experience;

  formatter = new Intl.ListFormat('es', {
    style: 'long',
    type: 'conjunction',
  });
}
