import { Component, OnInit } from '@angular/core';
import { SmartphoneService } from 'src/app/services/smartphone.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-smartphone.component.html',
  styleUrls: ['./add-smartphone.component.css']
})
export class AddSmartphoneComponent implements OnInit {
  smartphone = {
    name: '',
    image: '',
    storage: '',
    color: '',
    quantity: '',
    stock: true,
  };
  submitted = false;

  constructor(private smartphoneService: SmartphoneService) { }

  ngOnInit(): void {
  }

  saveSmartphone(): void {
    const data = {
      name: this.smartphone.name,
      image: this.smartphone.image,
      storage: this.smartphone.storage,
      color: this.smartphone.color,
      quantity: this.smartphone.quantity,
      stock: this.smartphone.stock
    };

    this.smartphoneService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newSmartphone(): void {
    this.submitted = false;
    this.smartphone = {
      name: '',
      image: '',
      storage: '',
      color: '',
      quantity: '',
      stock: true,
    };
  }

}
