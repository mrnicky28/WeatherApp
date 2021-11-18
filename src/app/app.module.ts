import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodayWeatherComponent } from './today/today-weather/today-weather.component';
import { DashboardWeatherComponent } from './dashboard/dashboard-weather/dashboard-weather.component';
import { SearchCityComponent } from './dashboard/search-city/search-city.component';
import { FavoriteCityComponent } from './dashboard/favorite-city/favorite-city.component';
import { WeatherEveryDayComponent } from './dashboard/weather-every-day/weather-every-day.component';
import { CityCardComponent } from './dashboard/favorite-city/city-card/city-card.component';
import { ChanceOfRainComponent } from './today/today-weather/chance-of-rain/chance-of-rain.component';
import { FullInfoOfWeatherComponent } from './today/today-weather/full-info-of-weather/full-info-of-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayWeatherComponent,
    DashboardWeatherComponent,
    SearchCityComponent,
    FavoriteCityComponent,
    WeatherEveryDayComponent,
    CityCardComponent,
    ChanceOfRainComponent,
    FullInfoOfWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
