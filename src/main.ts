import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';

// E usando o nome correto aqui
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));