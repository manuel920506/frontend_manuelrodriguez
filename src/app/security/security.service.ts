import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationResponseDTO, UserCredentialsDTO } from '../models/api-client';
import { finalize, Observable, tap } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { LoadingService } from '../loading/loading.service';
import { ApiPathsService } from '../services/api-paths.service';


@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(
    private httpClient : HttpClient,
    private configService: ConfigService,
    private loadingService: LoadingService,    
    private apiPathsService: ApiPathsService
  ) { }
 
 
  private readonly tokenKey = 'token';
  private readonly expirationKey = 'expiration-key';

  getUrlBase(){
    return this.configService.get('apiURL') + '/users'; 
  }
  
  register(userCredentials: UserCredentialsDTO) : Observable<AuthenticationResponseDTO>{
    return this.httpClient.post<AuthenticationResponseDTO>(`${this.getUrlBase()}/register`, userCredentials)
    .pipe(
      tap(authenticationResponse => this.saveToken(authenticationResponse))
    )
  }

  login(userCredentials: UserCredentialsDTO) : Observable<AuthenticationResponseDTO>{
    this.loadingService.show();  
    return this.httpClient.post<AuthenticationResponseDTO>(this.apiPathsService.getPaths().Login, userCredentials)
    .pipe(
      tap({
          next: (authenticationResponse: AuthenticationResponseDTO) => {
           this.saveToken(authenticationResponse)
          },
          error: (error) => { 
             console.error('Errore calling GetCommonDataByCode: ', error);
          }
        }),
        finalize(() => this.loadingService.hide())
    )
  } 

  getFieldJWT(field: string): string{
    const token = localStorage.getItem(this.tokenKey);
    if(!token){
      return '';
    }
    var dataToken = JSON.parse(atob(token.split('.')[1]));
    return dataToken[field];
  }

  saveToken(authenticationResponse: AuthenticationResponseDTO){
    localStorage.setItem(this.tokenKey, authenticationResponse.token!);
    localStorage.setItem(this.expirationKey, authenticationResponse.expiration!.toString());
  }

  youAreLoggedIn(): boolean{
    const token = localStorage.getItem(this.tokenKey);
    if(!token){
      return false;
    }

    const expiration = localStorage.getItem(this.expirationKey)!;
    const expirationDate = new Date(expiration);

    if(expirationDate <= new Date()){
      this.logout();
      return false;
    }

    return true;
  }

  logout(){
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.expirationKey);
  }

  getRole(): string {
    return '';
  }

}
