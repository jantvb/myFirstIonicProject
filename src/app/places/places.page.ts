import { Router } from '@angular/router';
import { Place } from './places.model';
import { PlacesService } from './places.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places: Array<Place> = new Array<Place>();

  constructor(private placesService: PlacesService,
              private router:        Router) { }

  ngOnInit() {
    this.loadPlaces();
  }

  ionViewWillEnter() {
    this.loadPlaces();
  }

  loadPlaces(): void {
    this.places = this.placesService.getPlaces();
  }

  addNewPlace(): void {
    this.router.navigate(['/new']);
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

}
