import { CommonDataDTO, EducationDTO, InfoCvDTO, LearningExperienceDTO, SkillDTO } from '../models/api-client';  
import { LoadingService } from '../loading/loading.service';
import { HttpClient, HttpParams } from '@angular/common/http';  
import { Injectable } from '@angular/core'; 
import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiPathsService } from './api-paths.service';

@Injectable({
  providedIn: 'root'
})
export class LearningExperienceService {   

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService,
    private apiPathsService: ApiPathsService
  ) {}
 

  GetCommonDataByCode(code : string):  Observable<CommonDataDTO> {
    this.loadingService.show();  
    const params = new HttpParams().set('code', code); 
    return this.http.get<CommonDataDTO>(this.apiPathsService.getPaths().CommonDataByCode, { params }).pipe( 
      tap({
        next: () => {
          // ...
        },
        error: (error) => { 
           console.error('Errore calling GetCommonDataByCode: ', error);
        }
      }),
      finalize(() => this.loadingService.hide())
    );
  } 

  GetInfoCV(code : string): Observable<InfoCvDTO> {
    this.loadingService.show();  
    const params = new HttpParams().set('code', code); 
    return this.http.get<InfoCvDTO>(this.apiPathsService.getPaths().InfoCV, { params }).pipe( 
      tap({
        next: () => {
          // ...
        },
        error: (error) => { 
           console.error('Errore calling GetInfoCV: ', error);
        }
      }),
      finalize(() => this.loadingService.hide())
    );
  } 
}