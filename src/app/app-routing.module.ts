import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'signin', loadChildren: () => import('./signin/signin.module').then((mod => mod.SigninModule))
  },
  {
    path: 'user', loadChildren: () => import('./user-module/user-module.module').then((mod => mod.UserModuleModule))
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then((mod => mod.AdminModule))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
