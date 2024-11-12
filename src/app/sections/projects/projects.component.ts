import { Component } from '@angular/core';
import { GlobalModules } from '../../global_modules';
import { openExternalLink } from '../../common/utils';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [GlobalModules],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  openLink = (link: string) => openExternalLink(link);
}
