import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {
  bootstrapArrowBarLeft,
  bootstrapArrowBarRight,
  bootstrapBarChartLine,
  bootstrapBorderAll,
  bootstrapCartPlus,
  bootstrapChatText,
  bootstrapPen,
  bootstrapShopWindow,
} from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterModule,
    CommonModule,
    NgIconComponent,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  viewProviders: [
    provideIcons({
      heroUsers,
      bootstrapBorderAll,
      bootstrapArrowBarRight,
      bootstrapArrowBarLeft,
      bootstrapChatText,
      bootstrapPen,
      bootstrapCartPlus,
      bootstrapShopWindow,
      bootstrapBarChartLine,
    }),
  ],
})
export class SidebarComponent {
  selectedLink: string = '';
  links = [
    { route: '/', icon: 'bootstrapBorderAll' },
    { route: '/leaderboard', icon: 'bootstrapBarChartLine' },
    { route: '/products', icon: 'bootstrapCartPlus' },
    { route: '/orders', icon: 'bootstrapShopWindow' },
    { route: '/notes', icon: 'bootstrapPen' },
    { route: '/login', icon: 'heroUsers' },
  ];

  selectLink(route: string) {
    this.selectedLink = route;
  }
}
