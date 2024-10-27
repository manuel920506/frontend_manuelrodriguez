import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'; 
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { MatIcon } from '@angular/material/icon'; 
import { AuthorizedComponent } from "../security/authorized/authorized.component";
import { AboutMeComponent } from "../edit/about-me/about-me.component";
import { SkillsComponent } from "../edit/skills/skills.component";
import { ExperiencesComponent } from "../edit/experiences/experiences.component";
import { EducationsComponent } from "../edit/educations/educations.component"; 
import { CertificationsReadComponent } from '../certifications-read/certifications-read.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatButtonModule,
    RouterModule,
    CommonModule,
    MatIcon,
    AuthorizedComponent,
    AboutMeComponent,
    SkillsComponent,
    ExperiencesComponent,
    EducationsComponent,
    CertificationsReadComponent,
    MatTooltipModule
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor( 
    private appState: AppStateService,
  ){}  

  onLogin(){
    this.appState.showLogin(); 
  }
}
