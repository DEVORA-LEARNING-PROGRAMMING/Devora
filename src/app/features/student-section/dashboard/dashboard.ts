import { Component } from '@angular/core';
import { SidebarComponent } from '../../../shared/sidebar/sidebar';
import { SearchHeader } from '../../../shared/search.header/search.header';
import { QuizesComponent } from '../quizes/quizes';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidebarComponent,SearchHeader,RouterLink

  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
