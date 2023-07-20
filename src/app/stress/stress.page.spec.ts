import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StressPage } from './stress.page';

describe('StressPage', () => {
  let component: StressPage;
  let fixture: ComponentFixture<StressPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
