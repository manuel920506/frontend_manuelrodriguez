import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class AppStateService {  
  private currentViewSubject = new BehaviorSubject<'login' | 'signup' | 'app'>('app');
  currentView$ = this.currentViewSubject.asObservable();
  
  showLogin() {
    this.currentViewSubject.next('login');
  }

  showSignup() {
    this.currentViewSubject.next('signup');
  }

  showApp() {
    this.currentViewSubject.next('app');
  }
}
