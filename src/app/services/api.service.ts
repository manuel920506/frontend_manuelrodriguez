import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse , withInterceptorsFromDi } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { LearningExperienceDTO, LearningExperienceListQueryDTO, SortDirection } from '../models/api-client'; 
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class LearningExperienceService {  
  private http = inject(HttpClient);
  private readonly urlBase = environment.apiURL + '/LearningExperience';

  constructor() {}

  getAllLearningExperience(params: LearningExperienceListQueryDTO): Observable<LearningExperienceDTO[]> {
    let param = new LearningExperienceListQueryDTO({
        sortDirection: SortDirection._0, // Asc
        sortExpression: 'title',
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

    return this.http.post<LearningExperienceDTO[]>(`${this.urlBase}/GetAllLearningExperiences`, param);
  } 
}