import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'; 
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { MatIcon } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog'; 
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ 
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule, 
    RouterModule,
    CommonModule,
    MatIcon
   ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private dialog: MatDialog){
    
  }
  login(){
    this.dialog.open(LoginComponent, { maxHeight: '800px'});  
  }
}
