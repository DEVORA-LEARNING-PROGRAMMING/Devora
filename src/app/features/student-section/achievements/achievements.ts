import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from "../../../shared/sidebar/sidebar";

@Component({
  selector: 'app-achievement',
  standalone: true,
  templateUrl: './achievements.html',
  styleUrl: './achievements.css',
  imports: [
    SidebarComponent,
    RouterLink
  ]
})
export class AchievementComponent {
}