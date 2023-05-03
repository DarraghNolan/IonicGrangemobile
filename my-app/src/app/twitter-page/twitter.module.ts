import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwitterPagePageRoutingModule } from './twitter-page-routing.module';

import { TwitterPagePage } from './twitter-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwitterPagePageRoutingModule
  ],
  declarations: [TwitterPagePage]
})
export class TwitterPagePageModule {}
