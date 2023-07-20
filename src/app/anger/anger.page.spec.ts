import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngerPage } from './anger.page';

describe('AngerPage', () => {
  let component: AngerPage;
  let fixture: ComponentFixture<AngerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AngerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
