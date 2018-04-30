import {RouterModule, Routes} from '@angular/router';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthguardService } from './services/authguard.service';

export const appRoutes: Routes = [
    {component: LoginPageComponent, path: ""},
    {component: SignupPageComponent, path: "signup"},
    {path: 'dashboard', component: DashboardComponent }, // , canActivate: [AuthguardService]
    {path: '', redirectTo: '/login', pathMatch: 'full'}
];