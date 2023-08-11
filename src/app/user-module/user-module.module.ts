import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetrieveComponent } from './retrieve/retrieve.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { WeatherComponent } from './weather/weather.component';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RetrieveComponent, DeleteComponent, UpdateComponent, WeatherComponent, HomeComponent],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserModuleModule { }
