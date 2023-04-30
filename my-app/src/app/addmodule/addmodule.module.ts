import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddModulePageRoutingModule } from './addmodule-routing.module';

import { AddModulePage } from './addmodule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddModulePageRoutingModule
  ],
  declarations: [AddModulePage]
})
export class AddModulePageModule {}
