import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';   
import { EducationDTO, LearningExperienceDTO, SkillDTO } from '../models/api-client'
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
  educationList: EducationDTO[] = [];
  jobDescriptions: string[]=[];
  descriptionAboutMeCodeFilter : string = 'DescriptionAboutMe';
  descriptionAboutMe: string = '';
  ngOnInit(){ 
    this.loadDescriptionAboutMe();
    this.loadLearningExperiences();
    this.loadEducations();
    this.loadSkills();    
  }

  loadDescriptionAboutMe(){
    this.apiService.GetCommonDataByCode(this.descriptionAboutMeCodeFilter).subscribe({
      next: (data) => {
        this.descriptionAboutMe = data.description;  
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching items:', error);
      }
    });
  }

  loadLearningExperiences(){
    this.apiService.getAllLearningExperience().subscribe({
      next: (data) => {
        this.experienceList = data;  
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching items:', error);
      }
    });
  }

  loadEducations(){
    this.apiService.getAllEducations().subscribe({
      next: (data) => {
        this.educationList = data;  
        this.cdr.detectChanges();
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
      },
      error: (error) => {
        console.error('Error fetching items:', error);
      }
    });
  }
 
  displaySkillList() : string{
    return this.skillList.map(skill => skill.description).join(", ");
  } 
}
