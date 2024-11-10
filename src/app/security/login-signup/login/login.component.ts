import { ChangeDetectorRef, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input'; 
import { CommonModule } from '@angular/common'; 
import { AppStateService } from '../../../app-state.service';
import { SecurityService } from '../../security.service';
import { extractErrorsIdentity } from '../../../shared/functions/extractErrors';
import { UserCredentialsDTO } from '../../../models/api-client';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
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
  hidePassword: boolean = true;
  errors: string[] = [];
  loginForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private appState: AppStateService,
    private cdr: ChangeDetectorRef,
    private securityService: SecurityService,
    private fb: FormBuilder
  ){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword; 
  }

  onClose(): void {
    this.appState.showApp(); 
    this.dialogRef.close(); 
  } 

  onLogin(){ 
    const userCredentials = new UserCredentialsDTO(); 
    userCredentials.init({
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    });
    console.log('userCredentials: ', userCredentials);
    this.securityService.login(userCredentials).subscribe({ 
      next: () => {
        this.appState.showApp(); 
        this.dialogRef.close(); 
        this.cdr.detectChanges();
      },
      error: err => {
        const errors = extractErrorsIdentity(err);
        this.errors = errors;
      }
    });
  }

  onSignUp(){ 
    this.appState.showSignup();  
    this.dialogRef.close(); 
  }
}
