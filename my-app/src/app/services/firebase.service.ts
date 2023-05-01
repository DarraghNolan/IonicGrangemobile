import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface AnnouncementInterface {
  id?: string;
  Announcement1:string;
  Announcement2:string;
} 

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: Firestore) { 
  }

    getAnnouncements():Observable<AnnouncementInterface[]> {
      const announcementRef= collection(this.firestore,'Announcement')
      return collectionData(announcementRef,{idField:'id'}) as Observable<AnnouncementInterface[]>
    }

  }