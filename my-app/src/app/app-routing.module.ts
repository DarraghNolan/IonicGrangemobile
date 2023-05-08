import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'addstudent',
    loadChildren: () => import('./addstudent/addstudent.module').then( m => m.AddStudentPageModule)
  },
  {
    path: 'addmodule',
    loadChildren: () => import('./addmodule/addmodule.module').then( m => m.AddModulePageModule)
  },
  {
    path: 'create-announcement/:id',
    loadChildren: () => import('./create-announcement/create-announcement.module').then( m => m.CreateAnnouncementPageModule)
  },  {
    path: 'addlecture',
    loadChildren: () => import('./addlecture/addlecture.module').then( m => m.AddlecturePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
