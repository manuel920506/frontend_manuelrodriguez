import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { ConfigService } from './app/services/config.service';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; 
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

function initializeApp(configService: ConfigService) {
  return () => configService.loadConfig();
}

const extendedAppConfig: ApplicationConfig = {
  ...appConfig,
  providers: [
    provideHttpClient(withInterceptorsFromDi()), 
    CommonModule, provideAnimationsAsync(),
    provideRouter(routes), 
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [ConfigService], multi: true }
  ]
};

bootstrapApplication(AppComponent, extendedAppConfig)
  .catch((err) => console.error(err));
