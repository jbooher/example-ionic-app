import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Person, StarWarsPeopleService } from '../services/star-wars-people.service';
import { ViewPersonPage } from '../view-person/view-person.page';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  people: Person<any>[];

  constructor(
    private starWarsPeopleService: StarWarsPeopleService,
    public modalController: ModalController,
    ) {}

  ngOnInit() {
    this.getPeople();
  }

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

  private getPeople(): void {
     this.starWarsPeopleService.getPeople().subscribe((data) => {
      this.people = data.results;
     });
  }
}
