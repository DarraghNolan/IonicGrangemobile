import { Component, OnInit, NgZone } from '@angular/core';
import { getApp } from '@angular/fire/app';

import { AnnouncementInterface, FirebaseService } from '../services/firebase.service';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  
  Announcements: any = [];

  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.getAnnouncements().subscribe((data)=>{
      this.Announcements=data;
    })
  }

  ngOnInit(){}
}