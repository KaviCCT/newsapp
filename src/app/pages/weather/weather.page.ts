import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

const api2KEY = environment.api2.API_KEY;
const api2URL = environment.api2.API_URL;

interface WeatherResponse {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  // Other properties from the response if needed
}


@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  weatherValues: any = {};
  constructor(public httpClient:HttpClient) {
    this.loadData()
  }

  loadData() {
    this.httpClient.get<WeatherResponse>(`${api2URL}/weather?q=${"Dublin"}&appid=${api2KEY}`).subscribe(
      (results) => {
        console.log(results);
        this.weatherValues = results.main;
      },
      (error) => {
        console.error(error);
        // Handle error if needed
      }
    );
  }

  ngOnInit() {
  }

}
