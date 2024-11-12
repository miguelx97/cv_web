import { Component } from '@angular/core';
import { GlobalModules } from '../../../global_modules';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [GlobalModules],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent { }
