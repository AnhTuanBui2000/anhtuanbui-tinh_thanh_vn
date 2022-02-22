import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinhThanhComponent } from './tinh-thanh.component';

describe('TinhThanhComponent', () => {
  let component: TinhThanhComponent;
  let fixture: ComponentFixture<TinhThanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinhThanhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinhThanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
