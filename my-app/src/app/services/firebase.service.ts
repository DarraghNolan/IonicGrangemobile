import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Announcement {
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

    getEvents():Observable<Announcement[]> {
      const eventRef= collection(this.firestore,'Announcement')
      return collectionData(eventRef,{idField:'id'}) as Observable<Announcement[]>
    }

  }
