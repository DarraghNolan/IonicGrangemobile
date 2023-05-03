import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwitterPagePage } from './twitter-page.page';

describe('TwitterPagePage', () => {
  let component: TwitterPagePage;
  let fixture: ComponentFixture<TwitterPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TwitterPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
