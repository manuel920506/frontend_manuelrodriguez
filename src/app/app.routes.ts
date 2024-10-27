import { Routes } from '@angular/router';  
import { HomeComponent } from './home/home.component'; 
import { AboutMeComponent } from './edit/about-me/about-me.component';
import { SkillsComponent } from './edit/skills/skills.component';
import { ExperiencesComponent } from './edit/experiences/experiences.component';
import { EducationsComponent } from './edit/educations/educations.component'; 
import { CertificationsReadComponent } from './certifications-read/certifications-read.component';
import { CertificationsComponent } from './edit/certifications/certifications.component';
import { isAdminGuard } from './shared/guards/is-admin.guard'; 

export const routes: Routes = [ 
    { path: 'home', component: HomeComponent }, 
    { path: 'aboutme-edit', component: AboutMeComponent, canActivate: [isAdminGuard] }, 
    { path: 'skills-edit', component: SkillsComponent, canActivate: [isAdminGuard] }, 
    { path: 'experiences-edit', component: ExperiencesComponent, canActivate: [isAdminGuard] },     
    { path: 'educations-edit', component: EducationsComponent, canActivate: [isAdminGuard] },  
    { path: 'certifications-edit', component: CertificationsComponent, canActivate: [isAdminGuard] }, 
    { path: 'certifications', component: CertificationsReadComponent },
    { path: '**', component: HomeComponent }
];
