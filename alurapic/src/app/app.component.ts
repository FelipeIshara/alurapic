import { PhotoComponent } from './photos/photo/photo.component';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'alurapic';

    photos: PhotoComponent[] = []


    constructor(
      http: HttpClient
    ) {
      http.get<PhotoComponent[]>('http://localhost:3000/flavio/photos')
        .subscribe(photos => this.photos = photos);
      console.log(this.photos);
    }
}
