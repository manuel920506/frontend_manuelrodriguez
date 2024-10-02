import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import { CommonModule } from '@angular/common'; 
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    RouterOutlet,
    HeaderComponent, 
    FooterComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'manuel rodriguez';
}
