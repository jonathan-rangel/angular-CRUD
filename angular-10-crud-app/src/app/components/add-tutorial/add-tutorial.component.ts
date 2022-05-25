import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  tutorial = {
    name: '',
    image: '',
    storage: '',
    color: '',
    quantity: '',
    stock: true,
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      name: this.tutorial.name,
      image: this.tutorial.image,
      storage: this.tutorial.storage,
      color: this.tutorial.color,
      quantity: this.tutorial.quantity,
      stock: this.tutorial.stock
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      name: '',
      image: '',
      storage: '',
      color: '',
      quantity: '',
      stock: true,
    };
  }

}
