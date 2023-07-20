import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepressionPage } from './depression.page';

describe('DepressionPage', () => {
  let component: DepressionPage;
  let fixture: ComponentFixture<DepressionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DepressionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
