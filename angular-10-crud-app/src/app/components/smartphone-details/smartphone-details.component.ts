import { Component, OnInit } from '@angular/core';
import { SmartphoneService } from 'src/app/services/smartphone.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-smarthpone-details',
  templateUrl: './smartphone-details.component.html',
  styleUrls: ['./smartphone-details.component.css']
})
export class SmartphoneDetailsComponent implements OnInit {
  currentSmartphone = null;
  message = '';

  constructor(
    private smartphoneService: SmartphoneService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getSmartphone(this.route.snapshot.paramMap.get('id'));
  }

  getSmartphone(id): void {
    this.smartphoneService.get(id)
      .subscribe(
        data => {
          this.currentSmartphone = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status): void {
    const data = {
      name: this.currentSmartphone.name,
      image: this.currentSmartphone.image,
      storage: this.currentSmartphone.storage,
      color: this.currentSmartphone.color,
      quantity: this.currentSmartphone.quantity,
      sotck: status
    };

    this.smartphoneService.update(this.currentSmartphone.id, data)
      .subscribe(
        response => {
          this.currentSmartphone.stock = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateSmartphone(): void {
    this.smartphoneService.update(this.currentSmartphone.id, this.currentSmartphone)
      .subscribe(
        response => {
          console.log(response);
          this.message = '¡La información del Iphone ha sido actualizada!';
        },
        error => {
          console.log(error);
        });
  }

  deleteSmartphone(): void {
    this.smartphoneService.delete(this.currentSmartphone.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/smartphones']);
        },
        error => {
          console.log(error);
        });
  }
}
