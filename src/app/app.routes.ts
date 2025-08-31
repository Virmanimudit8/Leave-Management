import { Routes } from '@angular/router';
import { LeaveRequestComponent } from './leave-request/leave-request.component';

export const appRoutes: Routes = [
  { path: 'request', component: LeaveRequestComponent },
  { path: '', redirectTo: 'request', pathMatch: 'full' },
];
