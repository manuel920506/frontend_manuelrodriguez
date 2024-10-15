import { LoadingComponent } from './loading/loading.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingService } from './loading/loading.service';
import {HeaderComponent} from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { Component } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    LoadingComponent,
    HeaderComponent, 
    FooterComponent,
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'manuel rodriguez';
  isLoading: Observable<boolean>;

  constructor(private loadingService: LoadingService) {
    this.isLoading = this.loadingService.loading$;
  }
}
