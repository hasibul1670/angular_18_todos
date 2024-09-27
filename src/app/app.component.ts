import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSonnerToaster, toast } from 'ngx-sonner';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SweetAlert2Module, NgxSonnerToaster, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected readonly toast = toast;
  title = 'todos_18';
}
