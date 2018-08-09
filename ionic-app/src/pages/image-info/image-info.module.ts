import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageInfoPage } from './image-info';

@NgModule({
  declarations: [
    ImageInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageInfoPage),
  ],
})
export class ImageInfoPageModule {}
