import { Component, Input } from '@angular/core'; 
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-authorized',
  standalone: true,
  imports: [],
  templateUrl: './authorized.component.html',
  styleUrl: './authorized.component.scss'
})
export class AuthorizedComponent { 
  constructor(private securityService: SecurityService) {    
  }

  @Input()
  role?: string;

  itIsAuthorized(): boolean{    
    let isAuthorized = this.securityService.youAreLoggedIn() && this.securityService.getRole() === this.role;
    return isAuthorized;
  } 

  itIsLoggedIn(): boolean{    
    let isLoggedIn = this.securityService.youAreLoggedIn(); 
    return isLoggedIn;
  } 
}
