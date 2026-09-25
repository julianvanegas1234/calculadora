import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentDetailPage } from './component-detail.page';

describe('ComponentDetailPage', () => {
  let component: ComponentDetailPage;
  let fixture: ComponentFixture<ComponentDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
