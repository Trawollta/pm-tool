import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
// weitere Imports, z. B. LoginComponent etc.

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  // Weitere Routen hinzufügen, z.B.
  // { path: 'login', component: LoginComponent },
];
