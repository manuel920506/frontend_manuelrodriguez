import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  educationList = [
    {description: 'Master AZ-104-Microsoft Azure Administrator(Remote) , Neural Academy', data: '2024'},
    {description: 'Master Data Science(Remote) , Neural Academy', data: '2022 – 2023'},
    {description: 'Training Sencha ExtJS(Remote)', data: '2022'},
    {description: 'Training c# .net, .net core 5, Angular 9(Remote)', data: '2020'},
    {description: 'Backend/Frontend Developer(Florence, Italy)', data: '2019-2020'},
    {description: 'Bachelor’s Degree(Las Tunas, Cuba)', data: '2010'}
    ]  
  experienceList = [
    { title: 'Full Stack .NET Developer, Energent S.p.A. (Remote)', date: '2022 – Present', 
      descriptions: [
        {description: 'I developed several full stack pages that allow the end user to edit on the own, enhancing the business\' efficiency. '},
        {description: 'I developed NUnit test, for every new component, increasing the codebase rigidity'},
        {description: 'Improved productivity and end-user experience with the product thanks to routinely produced documentation. Refactoring.'}
      ] 
    },
    { title: 'Full Stack .NET Developer, Onit Group srl', date: '2020 – 2022', 
      descriptions: [
        {description: 'I implemented an integration with automated systems, label printing and courier pick-up booking that helped the company save time and money.'},
        {description: 'I analysed and implemented workflows in the application that allowed the operator to skip steps and produce documents more quickly.'},
        {description: 'I created automatisms to help the customer optimise the inventory.'},
      ]
    },
  ];

  skillList = [
    'ASP.NET Core',
    'Framework .NET MVC',
    'SPRING.NET' ,
    'NUnit', 
    'vb.net',
    'sql server',
    'NHibernate .net',
    'Entity Framework', 
    'Maven 3.8.4', 
    'Java JDK 17', 
    'Eclipse', 
    'Spring Tools 4', 
    'MapStruct,',
    'Lombok', 
    'html', 
    'javascript', 
    'typescript', 
    'Ext JS', 
    'React', 
    'Redux', 
    'Knockoutjs', 
    'jquery', 
    'bootstrap', 
    'material',
    'ccs'
  ];

  displaySkillList() : string{
    return this.skillList.join(", ");
  }
}
