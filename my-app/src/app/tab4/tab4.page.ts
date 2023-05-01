import { Component, OnInit } from '@angular/core';

import { ModuleDataService } from '../services/moduledata.service';
import { Router } from '@angular/router';

// Import the student class
import { Module } from './modules';
import { ModalController, NavParams } from '@ionic/angular';
import { AddModulePage } from '../addmodule/addmodule.page';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit{

  modules: any;
  newModules: any;

  constructor(private moduledataservice: ModuleDataService, private router: Router, private modalCtrl: ModalController) {}

  getModuleData(){
    // Get the information from the API using Observable
    // by subscribing to the lecturerservice Observable 
    this.moduledataservice.getData().subscribe(result => {
      this.modules = result;
      this.newModules = this.modules.modules;
     });
  }

  // Create modal that will launch to add a new student to
  // the MySQL database using the AddStudentPage
  // The student object is then passed back from the modal
  // so that we can update the list view with the new item 
  // Note: ensure to import the AddStudentPage module to app.module.ts and 
  // add it to the imports array too
  async addModule() {
    // create modal instance
    const modal = await this.modalCtrl.create({
      component: AddModulePage
    });
    //Get the data returned from the Modal and add to global variable
    modal.onDidDismiss().then(data => {
      // Check if data has been retured
      // if not, the modal was cancelled
      // using back button
      if (data['data']) {
        this.newModules.push(data['data']);
        console.log(data['data']);
      } else {
        console.log("Modal Cancelled");
      }

    });
    return await modal.present();
  }

  ngOnInit() {
    this.getModuleData();
  }

  // changeDisplay() {
  //   const item = document.getElementById("module-details");
  //   item.style.display = "block";
  // }
}