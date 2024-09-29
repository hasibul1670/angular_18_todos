import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NotesComponent } from './pages/notes/notes.component';
import { OrderComponent } from './pages/order/order.component';
import { OtpFormComponent } from './pages/otp-form/otp-form.component';
import { OtpLoginComponent } from './pages/otp-login/otp-login.component';
import { ProductComponent } from './pages/product/product.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'otp-login',
    component: OtpLoginComponent,
  },
  {
    path: 'verify-otp',
    component: OtpFormComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'notes',
        component: NotesComponent,
      },
      {
        path: 'leaderboard',
        component: LeaderboardComponent,
      },
      {
        path: 'products',
        component: ProductComponent,
      },
      {
        path: 'orders',
        component: OrderComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
    ],
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
