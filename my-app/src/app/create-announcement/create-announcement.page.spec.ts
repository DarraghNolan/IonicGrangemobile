import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAnnouncementPage } from './create-announcement.page';

describe('CreateAnnouncementPage', () => {
  let component: CreateAnnouncementPage;
  let fixture: ComponentFixture<CreateAnnouncementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateAnnouncementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
