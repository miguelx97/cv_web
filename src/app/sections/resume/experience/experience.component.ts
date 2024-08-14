import { Component } from '@angular/core';
import { Experience } from './experience';
import { ExperienceItemComponent } from './experience-item/experience-item.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceItemComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Siptize',
      image: 'siptize',
      years: { start: 2022, end: 2024 },
      description: 'Proveedor de Voz IP',
      technologies: ['Ionic (Capacitor, Angular and Electron)', 'Java'],
    },
    {
      company: 'Menu Zone',
      image: 'menuzone',
      years: { start: 2023, end: 2024 },
      description: 'Red social para restaurantes',
      technologies: ['Flutter', 'Firebase'],
    },
    {
      company: 'Febelink',
      image: 'febelink',
      years: { start: 2021, end: 2021 },
      description: 'Red social para ofrecer y encontrar servicios',
      technologies: ['Ionic (Angular, cordova)', 'PHP (Laravel)'],
    },
    {
      company: 'Freelancing',
      image: 'miguel',
      years: { start: 2020, end: 2021 },
      description:
        'He trabajado durante un año como freelancer para startups y pequeñas empresas',
      technologies: ['Ionic', 'Firebase'],
    },
    {
      company: 'BBVA',
      image: 'bbva',
      years: { start: 2019, end: 2020 },
      description: 'Banco internacional',
      technologies: ['Java (Spring MVC)', 'JQuery', 'Oracle'],
    },
  ];
}
