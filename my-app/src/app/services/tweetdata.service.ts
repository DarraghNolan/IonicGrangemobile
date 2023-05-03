import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TweetdataService {

  // Create url to timeline_response 
  url = 'http://localhost:8200/php_twitter/timeline_response.php';
  
  // To run on device, use ip of server with MAMP on it.
  //url = 'http://192.168.178.112:8200/php_twitter/timeline_response.php';

  // Inject HttpClient module into Constructor
  constructor(private http: HttpClient) { }

  // Create getTwitterTimeline() function thats makes http request
  getTwitterTimeline() {
    // Make http request using Http Client;
    return this.http.get(this.url);
  }
}

