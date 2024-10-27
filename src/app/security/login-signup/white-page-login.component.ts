import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { AppStateService } from '../../app-state.service';

@Component({
  selector: 'app-white-page-login',
  standalone: true,
  template: `
    <div style="height: 100vh; background-color: white;"></div>
  `,
  styles: []
})
export class WhitePageLoginComponent implements OnInit {

  constructor(    
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.openLoginDialog();
  }

  openLoginDialog(): void {
    this.dialog.open(LoginComponent, {  
      width: '400px',
      height: '370px',
      maxHeight: '800px', 
      disableClose: true 
    }); 
  }
}