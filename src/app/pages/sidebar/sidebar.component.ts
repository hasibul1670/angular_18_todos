import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
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
  imports: [MatButtonModule, NgIconComponent, MatDividerModule, MatIconModule],
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
export class SidebarComponent {}
