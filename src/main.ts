import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '../dist/portfolio-ragui/browser/app/app.config';
import { AppComponent } from '../dist/portfolio-ragui/browser/app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));