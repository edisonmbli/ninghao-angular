import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { AuthGuard } from './auth/auth.guard';
import { ChildRoutesComponent } from './child-routes/child-routes.component';
import { DemoComponent } from './demo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      {
        path: 'child-routes',
        component: ChildRoutesComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((module) => module.AdminModule),
        canLoad: [AuthGuard],
      },
      {
        path: 'observable',
        component: ObservableDemoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
