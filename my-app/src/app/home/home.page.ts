import { Component, OnInit, NgZone } from '@angular/core';
import { getApp } from '@angular/fire/app';

import { AnnouncementInterface, FirebaseService } from '../services/firebase.service';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';

import { NewsFeedsService } from '../services/news-feeds.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  
  Announcements: any = [];
  articles: any

  constructor(private firebaseService: FirebaseService, private zone: NgZone, private newsService:NewsFeedsService) {
    this.firebaseService.getAnnouncements().subscribe((data)=>{
      this.Announcements=data;
    })

    this.loadNews()
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
}