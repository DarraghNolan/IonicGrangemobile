import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AddLecturePage } from './addlecture.page';

describe('AddLecturePage', () => {
  let component: AddLecturePage;
  let fixture: ComponentFixture<AddLecturePage>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ AddLecturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddLecturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
