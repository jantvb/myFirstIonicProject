import { Place } from './../places.model';
import { Router } from '@angular/router';
import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  addForm:         FormGroup;
  titleControl:    FormControl;
  imageURLControl: FormControl;
  place:           Place        = new Place();

  constructor(private placesService: PlacesService,
              private router:        Router) {

    this.titleControl    = new FormControl(this.place.title);
    this.imageURLControl = new FormControl(this.place.imageURL);
    this.addForm         = new FormGroup({
      titleControl:    this.titleControl,
      imageURLControl: this.imageURLControl
    });
  }

  ngOnInit() {
  }

  saveNewPlace(): void {
    this.place          = new Place();
    this.place.title    = this.titleControl.value;
    this.place.imageURL = this.imageURLControl.value;
    this.placesService.addPlace(this.place);
    this.router.navigate(['/places']);
  }

}
