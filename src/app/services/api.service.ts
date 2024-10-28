import { LearningExperienceDTO, SkillDTO } from '../models/api-client';  
import { LoadingService } from '../loading/loading.service';
import { HttpClient } from '@angular/common/http';  
import { Injectable } from '@angular/core'; 
import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PATHS } from './pathsApi';

@Injectable({
  providedIn: 'root'
})
export class LearningExperienceService {   

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {}
 

  getAllLearningExperience(): Observable<LearningExperienceDTO[]> {
    this.loadingService.show();  
    return this.http.get<LearningExperienceDTO[]>(PATHS.LearningExperiences).pipe( 
      tap({
        next: () => {
          // ...
        },
        error: (error) => { 
           console.error('Errore calling GetAllLearningExperiences: ', error);
        }
      }),
      finalize(() => this.loadingService.hide())
    );
  } 

  getAllSkills(): Observable<SkillDTO[]> {
    this.loadingService.show();  
    return this.http.get<SkillDTO[]>(PATHS.Skills).pipe( 
      tap({
        next: () => {
          // ...
        },
        error: (error) => { 
           console.error('Errore calling getAllSkills: ', error);
        }
      }),
      finalize(() => this.loadingService.hide())
    );
  } 
}