import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Person, StarWarsPeopleService } from '../services/star-wars-people.service';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.page.html',
  styleUrls: ['./view-person.page.scss'],
})
export class ViewPersonPage implements OnInit {
  @Input() dismissed: boolean;
  @Input() id: number;
  public person: Person<any>;

  constructor(
    private starWarsPeopleService: StarWarsPeopleService,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    this.starWarsPeopleService.getPersonById(`https://swapi.dev/api/people/${this.id}/`).subscribe((person) => {
      this.person = person;
    });
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
