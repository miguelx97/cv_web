import { Component } from '@angular/core';
import { GlobalModules } from '../../global_modules';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [GlobalModules],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
