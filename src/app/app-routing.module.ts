import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/auth.guard';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { LoginComponent } from './view/login/login.component';
import { NgModule } from '@angular/core';
import { QrCodeGeneratorComponent } from './shared/components/qr-code-generator/qr-code-generator.component';
import { QrCodeReaderComponent } from './shared/components/qr-code-reader/qr-code-reader.component';
import { Role } from './shared/models/roles';

const routes: Routes = [
  {
    path:"scanner",
    component:QrCodeReaderComponent
  },

  {
    path: "generator",
    component: QrCodeGeneratorComponent
  },
  {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        component: QrCodeGeneratorComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'user',
        component: QrCodeReaderComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.User] }
    },
    {
        path: 'login',
        component: LoginComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  


exports: [RouterModule]
})
export class AppRoutingModule { }
