import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSmartphoneComponent } from './components/add-smartphone/add-smartphone.component';
import { SmartphoneDetailsComponent } from './components/smartphone-details/smartphone-details.component';
import { SmartphonesListComponent } from './components/smartphones-list/smartphones-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    AddSmartphoneComponent,
    SmartphoneDetailsComponent,
    SmartphonesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
