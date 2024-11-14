import { Component } from '@angular/core';
import { GlobalModules } from '../../global_modules';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [GlobalModules],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
