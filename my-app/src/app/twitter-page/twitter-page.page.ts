import { Component } from '@angular/core';
import { TweetdataService } from '../services/tweetdata.service';

@Component({
  selector: 'app-twitter-page',
  templateUrl: 'twitter-page.page.html',
  styleUrls: ['twitter-page.page.scss'],
})
export class TwitterPagePage{

  tweets: any;

  constructor( private tweetdataservice: TweetdataService) {}

  getTweets(){
    // Subscribe to tweetdata service getTwitterTimeline()
    this.tweetdataservice.getTwitterTimeline().subscribe(result => {
      // Pass results to tweets variable
      //this.tweets = result['tweets'];
    });


  }

  ionViewWillEnter(){
    // Update tweets when view loads
    this.getTweets();
  }
}
