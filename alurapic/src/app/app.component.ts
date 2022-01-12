import { PhotoService } from './photos/photo/photo.service';
import { PhotoComponent } from './photos/photo/photo.component';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'alurapic';

  photos: PhotoComponent[] = [];

  constructor(photoService: PhotoService) {

    photoService.listFromUser('flavio').subscribe(photos => this.photos = photos)
  }
}
