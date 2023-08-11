import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetrieveComponent } from './retrieve/retrieve.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { WeatherComponent } from './weather/weather.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
  ,{
    path: 'retrieve',
    component:RetrieveComponent
  },
  {
    path:'delete',
    component: DeleteComponent
  },
  {
    path: 'update/:email',
    component: UpdateComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
