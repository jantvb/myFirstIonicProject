import { Place } from './../places.model';
import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private activatedRoute: ActivatedRoute,
              private placesService:  PlacesService,
              private router:         Router,
              public alertController: AlertController) { }

  ngOnInit() {
    this.loadPlace();
  }

  loadPlace(): void {
    this.activatedRoute.paramMap.subscribe(p => {
      const placeId = p.get('placeId');
      this.place    = this.placesService.getPlace(placeId);
    });
  }

  async deletePlace(): Promise<void> {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete Place!',
      message: 'Do you want to delete place: '+this.place.title+'?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Okay',
          handler: () => {
            this.placesService.deletePlace(this.place.id);
            this.router.navigate(['/places']);
          }
        }
      ]
    });

    await alert.present();
  }

}
