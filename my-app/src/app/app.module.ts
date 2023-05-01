import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';

// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';


import { HttpClientModule} from '@angular/common/http';

// These Modules had to be added here and to the imports array to ensure that the Model would work for adding
// students. Also, ensure to add this to the imports array too or the modal wont open.
import { AddStudentPageModule } from '../app/addstudent/addstudent.module';
import { AddModulePageModule } from '../app/addmodule/addmodule.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, AddStudentPageModule, AddModulePageModule, 
    provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())
    // , AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule
  ],
  providers: [
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
