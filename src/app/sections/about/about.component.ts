import { Component } from '@angular/core';
import { GlobalModules } from '../../global_modules';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [GlobalModules],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
