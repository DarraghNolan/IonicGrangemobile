import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAnnouncementPage } from './create-announcement.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAnnouncementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAnnouncementPageRoutingModule {}
