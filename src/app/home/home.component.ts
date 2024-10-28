import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';   
import { LearningExperienceDTO, SkillDTO } from '../models/api-client'
import { LearningExperienceService} from '../services/api.service'    

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit { 
  constructor(
    private cdr: ChangeDetectorRef,
    private apiService: LearningExperienceService
  ) {}
  experienceList: LearningExperienceDTO[] = [];
  skillList: SkillDTO[] = [];
  jobDescriptions: string[]=[];
  ngOnInit(){ 
    this.loadLearningExperiences();
    this.loadSkills();    
  }

  loadLearningExperiences(){
    this.apiService.getAllLearningExperience().subscribe({
      next: (data) => {
        this.experienceList = data;  
        this.cdr.detectChanges();
        console.log('loadLearningExperiences',data);
      },
      error: (error) => {
        console.error('Error fetching items:', error);
      }
    });
  }

  loadSkills(){
    this.apiService.getAllSkills().subscribe({
      next: (data) => {
        this.skillList = data;  
        this.cdr.detectChanges();
        console.log('loadSkills',data);
      },
      error: (error) => {
        console.error('Error fetching items:', error);
      }
    });
  }

  educationList = [
    {description: 'Master AZ-104-Microsoft Azure Administrator(Remote) , Neural Academy', data: '2024'},
    {description: 'Master Data Science(Remote) , Neural Academy', data: '2022 – 2023'},
    {description: 'Training Sencha ExtJS(Remote)', data: '2022'},
    {description: 'Training c# .net, .net core 5, Angular 9(Remote)', data: '2020'},
    {description: 'Backend/Frontend Developer(Florence, Italy)', data: '2019-2020'},
    {description: 'Bachelor’s Degree(Las Tunas, Cuba)', data: '2010'}
    ]   
 
  displaySkillList() : string{
    return this.skillList.map(skill => skill.description).join(", ");
  } 
}
