import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { ForecastService } from 'src/app/shared/services/forecast.service';

@Component({
  selector: 'app-weather-every-day',
  templateUrl: './weather-every-day.component.html',
  styleUrls: ['./weather-every-day.component.scss']
})
export class WeatherEveryDayComponent implements OnInit {

  weatherData:any = [];

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.forecastService.getWeatherForecast().pipe(
      pluck('list')
    ).subscribe(data=>{
      this.futureForecast(data)
    });
  }

  futureForecast(data: any){
    for(let i = 0; i < data.length; i = i + 8){
      this.weatherData.push(data[i])
      console.log('weather data',this.weatherData);
  }
}

}
