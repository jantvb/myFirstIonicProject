import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Array<Place> = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL: 'https://i.pinimg.com/originals/0a/ee/68/0aee68e5e233cad0c948e3789d08f085.jpg',
      comments: [
        'Awesome place',
        'Beautiful'
      ]
    },
    {
      id: '2',
      title: 'Statue of Liberty',
      imageURL: 'https://static.tvtropes.org/pmwiki/pub/images/statue_of_liberty_tcm25_531714.jpg',
      comments: [
        'Awesome place',
        'Beautiful'
      ]
    },
    {
      id: '3',
      title: 'Awesome Place',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYYBDWRfLYySYDMKIk0y9KCq9ejsEP2N1gg&usqp=CAU',
      comments: []
    }
  ];

  constructor() { }

  getPlaces(): Array<Place> {
    return this.places;
  }

  getPlace(placeId: string): Place {
    return this.places.find(p => p.id === placeId);
  }

  addPlace(place: Place): void {
    place.id = (this.places.length + 1).toString();
    this.places.push(place);
  }

  deletePlace(placeId: string): void {
    const places: Array<Place> = this.places.filter(p => p.id !== placeId);
    this.places = places;
  }


}
