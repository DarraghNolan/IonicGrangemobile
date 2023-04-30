import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { AddModulePage } from './addmodule.page';

const routes: Routes = [
  {
    path: '',
    component: AddModulePage
  }
];

const firebaseConfig = {
  apiKey: "AIzaSyDvRv8bpVNOcFBEDJRratNFivcuaSWaBfo",
  authDomain: "grangemobile-b4eb5.firebaseapp.com",
  projectId: "grangemobile-b4eb5",
  storageBucket: "grangemobile-b4eb5.appspot.com",
  messagingSenderId: "140150893451",
  appId: "1:140150893451:web:61a2ae42c0e60b0123dd8e",
  measurementId: "G-612ST051B6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddModulePageRoutingModule {}
