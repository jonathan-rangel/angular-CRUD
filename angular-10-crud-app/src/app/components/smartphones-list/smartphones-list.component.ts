import { Component, OnInit } from '@angular/core';
import { SmartphoneService } from 'src/app/services/smartphone.service';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-smartphones-list',
  templateUrl: './smartphones-list.component.html',
  styleUrls: ['./smartphones-list.component.css']
})
export class SmartphonesListComponent implements OnInit {

  smartphones: any;
  currentSmartphone = null;
  currentIndex = -1;
  name = '';
  faCogs = faCogs;

  constructor(private smartphoneService: SmartphoneService) { }

  ngOnInit(): void {
    this.retrieveSmartphones();
  }

  retrieveSmartphones(): void {
    this.smartphoneService.getAll()
      .subscribe(
        data => {
          this.smartphones = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveSmartphones();
    this.currentSmartphone = null;
    this.currentIndex = -1;
  }

  setActiveSmartphone(smartphone, index): void {
    this.currentSmartphone = smartphone;
    this.currentIndex = index;
  }

  removeAllSmartphones(): void {
    this.smartphoneService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.smartphoneService.findByTitle(this.name)
      .subscribe(
        data => {
          this.smartphones = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
