import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartphonesListComponent } from './components/smartphones-list/smartphones-list.component';
import { SmartphoneDetailsComponent } from './components/smartphone-details/smartphone-details.component';
import { AddSmartphoneComponent } from './components/add-smartphone/add-smartphone.component';

const routes: Routes = [
  { path: '', redirectTo: 'smartphones', pathMatch: 'full' },
  { path: 'smartphones', component: SmartphonesListComponent },
  { path: 'smartphones/:id', component: SmartphoneDetailsComponent },
  { path: 'add', component: AddSmartphoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
