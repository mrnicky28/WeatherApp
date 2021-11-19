import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/shared/services/forecast.service';

@Component({
  selector: 'app-full-info-of-weather',
  templateUrl: './full-info-of-weather.component.html',
  styleUrls: ['./full-info-of-weather.component.scss']
})
export class FullInfoOfWeatherComponent implements OnInit {
  timeline:any = [];
  weatherNow:any;
  location:any;
  currentTime = new Date();
  clock = Date.now();

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.forecastService.getWeatherForecast().subscribe(data =>{
      console.log('wefwef',data);
      this.getTodayForecast(data)
      this.getTime()

    }
    )
  }

  getTime(){
    setInterval(() => {
      this.clock = Date.now();
    }, 1000);
  }

  dateRange(){
    const start = new Date();
    start.setHours(start.getHours()+(start.getTimezoneOffset() / 60));
    const to = new Date(start);
    to.setHours(to.getHours() + 2, to.getMinutes() + 59, to.getSeconds() + 59);

    return { start, to }
  }
  getTodayForecast(today: any){
    this.location = today.city;

    for(const forecast of today.list.slice(0,8)){
      this.timeline.push({
        time: forecast.dt_txt,
        temp: forecast.main.temp,
      });
      const apiDate = new Date(forecast.dt_txt).getTime();

     if(this.dateRange().start.getTime() <= apiDate && this.dateRange().to.getTime() >= apiDate){
      this.weatherNow = forecast;
      console.log(this.weatherNow);
     }

    }
  }

}
