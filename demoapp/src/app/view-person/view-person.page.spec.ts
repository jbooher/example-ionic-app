import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewPersonPageRoutingModule } from './view-person-routing.module';

import { ViewPersonPage } from './view-person.page';

describe('ViewPersonPage', () => {
  let component: ViewPersonPage;
  let fixture: ComponentFixture<ViewPersonPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPersonPage ],
      imports: [IonicModule.forRoot(), ViewPersonPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
