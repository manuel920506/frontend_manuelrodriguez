import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input'; 
import { CommonModule } from '@angular/common'; 
import { AppStateService } from '../../../app-state.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule, 
    FormsModule, 
    MatInputModule,
    MatIcon,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent { 
  user: string = '';
  password: string = '';
  hidePassword: boolean = true;
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private appState: AppStateService
  ){

  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword; 
  }

  onClose(): void {
    this.appState.showApp(); 
    this.dialogRef.close(); 
  }

  onLogin(){
    console.log(`OnLogin -User: ${this.user}  password: ${this.password}`);
  }

  onSignUp(){ 
    this.appState.showSignup();  
    this.dialogRef.close(); 
  }
}
