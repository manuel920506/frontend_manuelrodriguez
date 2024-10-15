import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
}) 
export class LoadingComponent {
}
