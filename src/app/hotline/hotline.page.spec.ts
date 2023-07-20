import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotlinePage } from './hotline.page';

describe('HotlinePage', () => {
  let component: HotlinePage;
  let fixture: ComponentFixture<HotlinePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HotlinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
