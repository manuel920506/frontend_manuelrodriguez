import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';   
import { LearningExperienceDTO } from '../models/api-client'
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
  experienceList: LearningExperienceDTO[] = [];
  jobDescriptions: string[]=[];
  apiService = inject(LearningExperienceService);
  ngOnInit(){ 
    this.apiService.getAllLearningExperience().subscribe({
      next: (data) => {
        this.experienceList = data; 
        console.log(data);
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

  skillList = [
    'ASP.NET Core',
    'Framework .NET MVC',
    'SPRING.NET' ,
    'NUnit', 
    'Vb.net',
    'Sql server',
    'NHibernate .net',
    'Entity Framework', 
    'Maven 3.8.4', 
    'Java JDK 17', 
    'Spring Tools 4', 
    'MapStruct',
    'Lombok', 
    'Python',
    'Html', 
    'Javascript', 
    'Typescript', 
    'Angular 18',
    'Ext JS', 
    'React', 
    'Redux', 
    'Knockoutjs', 
    'Jquery', 
    'Bootstrap', 
    'Material',
    'CCS'
  ];

  displaySkillList() : string{
    return this.skillList.join(", ");
  } 
}
