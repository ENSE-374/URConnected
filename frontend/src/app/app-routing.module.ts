import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GroupPageComponent } from './components/group-page/group-page.component';
import { ViewProfileComponent  } from './components/view-profile/view-profile.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'group-page', component: GroupPageComponent },
  { path: 'view-profile', component: ViewProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
