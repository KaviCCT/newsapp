import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

const api1KEY = environment.api1.API_KEY;
const api1URL = environment.api1.API_URL;

@Injectable({
  providedIn: 'root'
})
export class NewsArticlesService {

  constructor(private httpClient: HttpClient) { 
  }
  
  getTopHeadlines():Observable<any>{
    return this.httpClient.get(`${api1URL}/top-headlines?country=ie&apiKey=${api1KEY}`)
  }

  getArticlesByCategory(category: string): Observable<any>{
    return this.httpClient.get(`${api1URL}/top-headlines?country=ie&category=${category}&apiKey=${api1KEY}`)
  }


}
