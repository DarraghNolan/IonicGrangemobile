import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class NewsFeedsService {

  constructor(private http:HttpClient) { }

  getNews(url: any){
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`)
  }
}
