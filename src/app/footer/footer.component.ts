import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { MatIconModule } from '@angular/material/icon';   
import { CommonModule } from '@angular/common'; 
import { Component } from '@angular/core';  


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatIconModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(library: FaIconLibrary) { 
    library.addIcons(faLinkedin, faGithub, faEnvelope, faPhone);
  }
} 
