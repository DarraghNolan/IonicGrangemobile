import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnnouncementInterface } from '../services/firebase.service';
import { getApp } from '@angular/fire/app';
import { addDoc, collection, getFirestore, onSnapshot, doc, setDoc } from 'firebase/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.page.html',
  styleUrls: ['./create-announcement.page.scss'],
})
export class CreateAnnouncementPage implements OnInit {
  public createAnnouncementForm: FormGroup;  
  private firebaseApp = getApp();
  private db = getFirestore(this.firebaseApp);
  private announcementId= "null";
  constructor(public formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { 
    this.createAnnouncementForm = this.formBuilder.group({
      Announcement1: ['', Validators.compose([Validators.required])],
      Announcement2: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.announcementId = this.route.snapshot.params['id'];
    if(this.announcementId !== 'new'){
    const currentAnnouncement = doc(this.db, `Announcement/${this.announcementId}`);

      onSnapshot(currentAnnouncement, snapshot => {  
        const data = snapshot.data();
        if (data) {
        this.createAnnouncementForm.setValue({
          Title: data['Announcement1'],
          Image: data['Announcement2'],
        });
      }
    })    
  }
}

  addAnnouncement(): void{
    
    if(this.announcementId ==='new'){
      const announcementCollection = collection(this.db, 'Announcement');
    
      addDoc(announcementCollection, this.createAnnouncementForm.value).then(() => {
        this.router.navigateByUrl('');
      });
      
    
    } else{
      const announcementDoc = doc(this.db, `Announcement/${this.announcementId}`);
      setDoc(announcementDoc, this.createAnnouncementForm.value).then(() => {
        this.router.navigateByUrl('');
      });
    }     
  }

  backButton(){
    this.router.navigateByUrl('');
  }
}