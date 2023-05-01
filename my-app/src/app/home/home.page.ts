import { Component, OnInit, NgZone } from '@angular/core';
import { getApp } from '@angular/fire/app';

import { AnnouncementInterface } from '../services/firebase.service';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  public Announcements: AnnouncementInterface[] = [];
  constructor(private zone: NgZone) {}

  ngOnInit(){
    const firebaseApp = getApp();
    const db = getFirestore(firebaseApp);
    const announceCollection = collection(db, 'Announcement');

    onSnapshot<AnnouncementInterface>(announceCollection, snapshot => {
      this.zone.run(() => {
        this.Announcements = snapshot.docs.map(d => d.data());
      })
    })
  }

  addAnnouncement(): void{
    const firebaseApp = getApp();
    const db = getFirestore(firebaseApp);

    const annonceCollection = collection(db, 'Announcement');
    addDoc(annonceCollection, this.createAnnouncementForm.value);
  }
}