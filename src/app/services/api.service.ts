import { LearningExperienceDTO } from '../models/api-client'; 
import { environment } from '../../environments/environment'; 
import { LoadingService } from '../loading/loading.service';
import { HttpClient } from '@angular/common/http';  
import { Injectable } from '@angular/core'; 
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LearningExperienceService {   
  private readonly urlBase = environment.apiURL + '/LearningExperience'; 

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {}

  getAllLearningExperience(): Observable<LearningExperienceDTO[]> {
    this.loadingService.show();  
    return this.http.get<LearningExperienceDTO[]>(`${this.urlBase}/GetAllLearningExperiences`).pipe( 
      tap({
        next: () => this.loadingService.hide(),
        error: (error) => {
           this.loadingService.hide();
           console.error('Errore calling GetAllLearningExperiences: ', error);
        }
      })
    );
  } 
}