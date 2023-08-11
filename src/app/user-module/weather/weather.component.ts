import { Component } from '@angular/core';
import { MyApiService } from '../../services/my-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from '../../interfaces/user.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent {

  weatherForm: FormGroup = new FormGroup({})

  constructor(private myApiService: MyApiService, private fb: FormBuilder) {}

  ngOnInit(){
    this.weatherForm = this.fb.group({
      city:['', [Validators.required]]
    })
  }

  fetchWeatherData() {
    const city:City = {...this.weatherForm?.value}
    console.log(city.city)
    this.myApiService.fetchData(city.city).subscribe(
      (response) => {
        console.warn(response)
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
