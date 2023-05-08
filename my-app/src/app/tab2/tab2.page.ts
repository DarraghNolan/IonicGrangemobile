import { Component, OnInit } from '@angular/core';

import { LecturerDataService } from '../services/lecturerdata.service';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { Lecture } from './lecture';
import { AddLecturePage } from '../addlecture/addlecture.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  lecturers: any;
  newLecturers: any;
  newLecture = new Lecture();

  constructor(private lecturerservice: LecturerDataService, private router: Router, private modalCtrl: ModalController) {}

  getLecturerData(){
    // Get the information from the API using Observable
    // by subscribing to the lecturerservice Observable 
    this.lecturerservice.getData().subscribe(result => {
      this.lecturers = result;
      this.newLecturers = this.lecturers.lecturers;
     });
  }

  async addLecture() {
    // create modal instance
    const modal = await this.modalCtrl.create({
      component: AddLecturePage
    });
    //Get the data returned from the Modal and add to global variable
    modal.onDidDismiss().then(data => {
      // Check if data has been retured
      // if not, the modal was cancelled
      // using back button
      if (data['data']) {
        this.newLecturers.push(data['data']);
        console.log(data['data']);
      } else {
        console.log("Modal Cancelled");
      }

    });
    return await modal.present();
  }

  ngOnInit() {
    this.getLecturerData();
  }
}
