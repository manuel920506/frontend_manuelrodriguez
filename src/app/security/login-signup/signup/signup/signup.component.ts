import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';   
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { AppStateService } from '../../../../app-state.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule, 
    MatDialogModule, 
    FormsModule,  
    MatIcon, 
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SignupComponent>,
    private appState: AppStateService
  ) {
    this.signupForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordsMatch }
    );

      // Subscribe to value changes to ensure validation
      this.signupForm.get('password')?.valueChanges.subscribe(() => {
        this.signupForm.updateValueAndValidity();
      });
      this.signupForm.get('confirmPassword')?.valueChanges.subscribe(() => {
        this.signupForm.updateValueAndValidity();
      });
  } 

  checkErrorMatchingConfirmPassword() : boolean{
    const notMatching = !!this.signupForm.hasError('notMatching');
    const touched = !!this.signupForm.get('confirmPassword')?.touched;
    const confirmPasswordFilled = !!this.signupForm.get('confirmPassword')?.hasError('required');
    var  result =  notMatching && touched && !confirmPasswordFilled;
    return result;
  }
  
  passwordsMatch(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    const result =  password === confirmPassword ? null : { notMatching: true };
    return result;
  }

  onSignUp() {
    if (this.signupForm.valid) {
      console.log('onSubmit:', this.signupForm.value);
    }
  } 

  onClose(): void {
    this.appState.showApp(); 
    this.dialogRef.close(); 
  }
}