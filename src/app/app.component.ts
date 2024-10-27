import { LoadingComponent } from './loading/loading.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingService } from './loading/loading.service';
import { HeaderComponent} from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStateService } from './app-state.service';
import { WhitePageLoginComponent } from './security/login-signup/white-page-login.component'
import { WhitePageSignupComponent } from './security/login-signup/white-page-signup.component'


@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    LoadingComponent,
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    CommonModule,
    WhitePageLoginComponent,
    WhitePageSignupComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit {
  title = 'manuel rodriguez'; 
  currentView: 'login' | 'signup' | 'app' = 'app';
  isLoading: Observable<boolean>;
  isLoginPage: boolean = false;

  constructor(
    private loadingService: LoadingService,
    private appState: AppStateService
  ) {
    this.isLoading = this.loadingService.loading$;
  } 

  ngOnInit() { 
    this.appState.currentView$.subscribe(view => {
      this.currentView = view;
    });
  }
}
