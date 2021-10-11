import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Person, StarWarsPeopleService } from '../services/star-wars-people.service';
import { ViewPersonPage } from '../view-person/view-person.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public modalController: ModalController,
  ) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  async presentModal(index: number) {
    const modal = await this.modalController.create({
      component: ViewPersonPage,
      componentProps: {
        id: index,
      }
    });
    return await modal.present();
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }
}
