import { Component } from '@angular/core';
import { GlobalModules } from '../../global_modules';
import { openExternalLink } from '../../common/utils';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [GlobalModules],
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent {
  openLink = (link: string) => openExternalLink(link);
}
