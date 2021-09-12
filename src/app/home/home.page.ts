import { Photo } from './photo.model';
import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  photos: Array<Photo>;

  constructor(private photoService: PhotosService) {}

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos(): void {
    this.photoService
        .getPhotos()
        .subscribe(rPhotos => {
          this.photos = new Array<Photo>();
          Object.assign(this.photos, rPhotos);
        }, err => {
          console.log(err);
      });
  }

}
