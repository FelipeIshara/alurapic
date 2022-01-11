import { PhotoComponent } from './photo/photo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PhotoComponent],

  exports: [
    PhotoComponent
  ]
})
export class PhotosModule { }
