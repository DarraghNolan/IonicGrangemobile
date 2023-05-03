import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TwitterPagePage } from './twitter-page.page';

describe('TwitterPagePage', () => {
  let component: TwitterPagePage;
  let fixture: ComponentFixture<TwitterPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TwitterPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
