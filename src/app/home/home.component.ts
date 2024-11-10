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
    this.GetInfoCV();   
  }

  GetInfoCV(){
    this.apiService.GetInfoCV(this.descriptionAboutMeCodeFilter).subscribe({
      next: (data) => {
        this.descriptionAboutMe = (data && data.commonDataDTO &&  data.commonDataDTO.description) ? data.commonDataDTO.description : '';  
        this.experienceList = data.learningExperiencesDTO ?? [];
        this.educationList = data.educationsDTO ?? [];
        this.skillList = data.skillsDTO ?? [];
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
