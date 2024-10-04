import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input'; // Importa MatInputModule 
import { CommonModule } from '@angular/common';

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
  constructor(public dialogRef: MatDialogRef<LoginComponent>){

  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword; 
  }

  onClose(): void {
    this.dialogRef.close(); 
  }
  onLogin(){
    console.log(`OnLogin -User: ${this.user}  password: ${this.password}`);
    console.log('Pagina in costruzione, login non effettivamente sviluppato lato backend');
  }
}
