import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceAddPageRoutingModule } from './place-add-routing.module';

import { PlaceAddPage } from './place-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PlaceAddPageRoutingModule
  ],
  declarations: [PlaceAddPage]
})
export class PlaceAddPageModule {}
