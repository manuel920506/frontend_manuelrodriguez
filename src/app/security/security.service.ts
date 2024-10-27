import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthenticationResponseDTO, UserCredentialsDTO } from '../models/api-client';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(
    private httpClient : HttpClient
  ) { }

  private urlBase = environment.apiURL + '/users'; 
  private readonly tokenKey = 'token';
  private readonly expirationKey = 'expiration-key';
  
  register(userCredentials: UserCredentialsDTO) : Observable<AuthenticationResponseDTO>{
    return this.httpClient.post<AuthenticationResponseDTO>(`${this.urlBase}/register`, userCredentials)
    .pipe(
      tap(authenticationResponse => this.saveToken(authenticationResponse))
    )
  }

  login(userCredentials: UserCredentialsDTO) : Observable<AuthenticationResponseDTO>{
    return this.httpClient.post<AuthenticationResponseDTO>(`${this.urlBase}/login`, userCredentials)
    .pipe(
      tap(authenticationResponse => this.saveToken(authenticationResponse))
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
