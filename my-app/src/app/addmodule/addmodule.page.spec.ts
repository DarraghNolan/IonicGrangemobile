import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddModulePage } from './addmodule.page';

describe('AddModulePage', () => {
  let component: AddModulePage;
  let fixture: ComponentFixture<AddModulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddModulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddModulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
