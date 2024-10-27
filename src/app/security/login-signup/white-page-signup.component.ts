import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { AppStateService } from '../../app-state.service';
import { SignupComponent } from './signup/signup/signup.component';

@Component({
  selector: 'app-white-page-signup',
  standalone: true,
  template: `
    <div style="height: 100vh; background-color: white;"></div>
  `,
  styles: []
})
export class WhitePageSignupComponent implements OnInit {

  constructor(    
    private appState: AppStateService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.openSignupDialog();
  }

  openSignupDialog(): void {
    this.dialog.open(SignupComponent, { 
      width: '400px',
      height: '550px',
      maxHeight: '800px', 
      disableClose: true 
    });  

    this.appState.showSignup(); 
  }
}