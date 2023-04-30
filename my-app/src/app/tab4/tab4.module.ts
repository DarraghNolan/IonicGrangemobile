import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ModuleCreateService } from '..//services/modulecreate.service';
import { StudentDataService} from '..//services/studentdata.service';
import { ModuleDataService } from '../services/moduledata.service';
import { LecturerDataService } from '../services/lecturerdata.service';

import { Tab4PageRoutingModule } from './tab4-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab4Page }]),
    Tab4PageRoutingModule,
  ],
  declarations: [Tab4Page],
  providers: [ModuleCreateService, StudentDataService, ModuleDataService, LecturerDataService],
})
export class Tab4PageModule {}
