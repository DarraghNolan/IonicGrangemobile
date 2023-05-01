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
      title: ['', Validators.compose([Validators.required])],
      details: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.announcementId = this.route.snapshot.params.id;
    if(this.announcementId !== 'new'){
      const currentAnnouncement = doc(this.db, 'Announcment/${id}');
      onSnapshot<AnnouncementInterface>(currentAnnouncement, snapshot => {
        console.log(snapshot.data());
        this.createAnnouncementForm.setValue({
          title: snapshot.data().title,
          details: snapshot.data().details,
        })
      })
    }
  }

  addParty(): void{  
    if(this.announcementId === 'new'){
      const annonceCollection = collection(this.db, 'Announcement');
  
      addDoc(annonceCollection, this.createAnnouncementForm.value).then(() =>{
        this.router.navigateByUrl('');
      });
    } else{
      const announceDoc = doc(this.db, 'Announcment/${this.announcementId}');
      setDoc(announceDoc, this.createAnnouncementForm.value).then(() =>{
        this.router.navigateByUrl('');
      });
    }
  }
}
