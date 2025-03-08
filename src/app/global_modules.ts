import { TitleComponent } from './components/title/title.component';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";

export const GlobalModules: any[] = [
  // Globally loaded modules
  TitleComponent, TranslatePipe, TranslateDirective
];
