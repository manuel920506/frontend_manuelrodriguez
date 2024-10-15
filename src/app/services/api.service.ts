import { LearningExperienceDTO, LearningExperienceListQueryDTO } from '../models/api-client'; 
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

  getAllLearningExperience(params: LearningExperienceListQueryDTO): Observable<LearningExperienceDTO[]> {
    this.loadingService.show();
    let param = new LearningExperienceListQueryDTO({
        pageIndex: 1,
        pageSize: 25
    });
    if (params.sortDirection) {
       param.sortDirection = params.sortDirection;
    }
    if (params.sortExpression) {
      param.sortExpression = params.sortExpression;
    }
    if (params.pageIndex !== undefined) {
      param.pageIndex = params.pageIndex;
    }
    if (params.pageIndex !== undefined) {
      param.pageIndex = params.pageIndex;
    }
    if (params.description) {
      param.description = params.description;
    } 

    return this.http.post<LearningExperienceDTO[]>(`${this.urlBase}/GetAllLearningExperiences`, param).pipe( 
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