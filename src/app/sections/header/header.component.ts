import { Component } from '@angular/core';
import { GlobalModules } from '../../global_modules';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [GlobalModules],
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent {

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
