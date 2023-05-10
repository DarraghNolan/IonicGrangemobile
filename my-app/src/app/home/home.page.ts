import { Component, OnInit, NgZone } from '@angular/core';
import { getApp } from '@angular/fire/app';

import { AnnouncementInterface, FirebaseService } from '../services/firebase.service';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';

import { NewsFeedsService } from '../services/news-feeds.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const weather_API_URL = environment.Weather_API_URL;
const weather_API_KEY = environment.Weather_API_KEY;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  
  Announcements: any = [];
  articles: any
  weatherTemps: any
  todayDate = new Date()
  cityName: any

  constructor(
    private firebaseService: FirebaseService, 
    private zone: NgZone, 
    private newsService:NewsFeedsService, 
    public httpClient:HttpClient) 
    {

    this.firebaseService.getAnnouncements().subscribe((data)=>{
      this.Announcements=data;
    })

    this.loadNews()
    this.loadWeatherData()
  }

  ngOnInit(){
    const firebaseApp = getApp();
    const db = getFirestore(firebaseApp);
    const announcementCollection = collection(db, 'Announcement');

    onSnapshot(announcementCollection, snapshot => {
      this.zone.run(() => {
        this.Announcements = snapshot.docs.map(d =>{
          const currentAnnouncement = d.data() as AnnouncementInterface;
          currentAnnouncement.id = d.id;
          return currentAnnouncement;
        })
      })
    })
  }

  loadNews(){
    this.newsService.getNews("everything?q=TU-Dublin&language=en&sortBy=relevancy&sources=the-irish-times").subscribe( (news: any) => {
      this.articles = news['articles'];
      console.log(this.articles);

    })
  }

  loadWeatherData(){
    // this.httpClient.get(`${weather_API_URL}/onecall?lat=${53.3546668}&lon=${-6.279672}&appid=${weather_API_KEY}`).subscribe( (results: any) => {
    this.httpClient.get(`${weather_API_URL}/weather?lat=${53.3546668}&lon=${-6.279672}&appid=${weather_API_KEY}`).subscribe( (results: any) => {
      this.weatherTemps = results['main']
      this.cityName = results['name']
      console.log(this.weatherTemps);
    })
  }
}