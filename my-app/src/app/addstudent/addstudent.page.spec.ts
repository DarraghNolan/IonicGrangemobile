import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddStudentPage } from './addstudent.page';

describe('AddStudentPage', () => {
  let component: AddStudentPage;
  let fixture: ComponentFixture<AddStudentPage>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
