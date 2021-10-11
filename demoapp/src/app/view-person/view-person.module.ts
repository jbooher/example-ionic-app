import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewPersonPage } from './view-person.page';

import { IonicModule } from '@ionic/angular';

import { ViewPersonPageRoutingModule } from './view-person-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPersonPageRoutingModule,
  ],
  declarations: [ViewPersonPage]
})
export class ViewPersonPageModule {}
