import { Component, OnInit } from '@angular/core';
import { Lecture } from '../tab2/lecture';
import { LecturerCreateService } from '../services/lecturercreate.service';
// Used to manage the Modal with dosmiss()
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addlecture',
  templateUrl: './addlecture.page.html',
  styleUrls: ['./addlecture.page.scss'],
})
export class AddLecturePage{
  
  newLecture = new Lecture();

  constructor(private lecturecreateservice: LecturerCreateService, private modalCtrl: ModalController) { }

  // Method that uses the student create service to post data to the database via php
  addLecture() {
    //console.log(this.newStudent);
    // Make a post request using the studentcreate service and subscribe to the
    // response in order to inform the user of the outcome. In this case, we just
    // go back to the previous page
    this.lecturecreateservice.postData(this.newLecture).subscribe(
      res => {
        console.log("Success: Record has been added" + res);
        this.dismiss(true);
      },
      async err => {
        console.log(err.message);
      }
    );
  }

  // Now dismiss the modal and pass the created student back to
  // the tab1 page so that we can add the student to the list
  dismiss(returnLecture: boolean) {
    if (returnLecture) {
      this.modalCtrl.dismiss(this.newLecture);
    } else {
      this.modalCtrl.dismiss();
    }
  }
  
}
