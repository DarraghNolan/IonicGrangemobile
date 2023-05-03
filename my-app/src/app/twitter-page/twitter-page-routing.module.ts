import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwitterPagePage } from './twitter-page.page';

const routes: Routes = [
  {
    path: '',
    component: TwitterPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwitterPagePageRoutingModule {}
