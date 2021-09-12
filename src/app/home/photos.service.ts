import { environment } from './../../environments/environment';
import { Photo } from './photo.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  path = environment.bOUrl +'photos?_limit=15';

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Array<Photo>> {
    return this.http.get<Array<Photo>>(this.path);
  }
}
