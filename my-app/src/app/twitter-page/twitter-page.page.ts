import { Component } from '@angular/core';
import { TweetdataService } from '../services/tweetdata.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  tweets: any;

  constructor( private tweetdataservice: TweetdataService) {}

  getTweets(){
    // Subscribe to tweetdata service getTwitterTimeline()
    this.tweetdataservice.getTwitterTimeline().subscribe(result => {
      // Pass results to tweets variable
      this.tweets = result['tweets'];
    });


  }

  ionViewWillEnter(){
    // Update tweets when view loads
    this.getTweets();
  }
}
