import { TitleComponent } from './components/title/title.component';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";

export const GlobalModules = [
  // Globally loaded modules
  TitleComponent, TranslatePipe, TranslateDirective
];
