import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  Announcements: any = [];

  constructor(private firebaseService: FirebaseService) {

  this.firebaseService.getEvents().subscribe((data)=>{
    this.Announcements=data;
  })
  }

}