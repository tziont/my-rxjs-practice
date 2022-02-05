import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJS.TsComponent } from './rx-js.ts.component';

describe('RxJS.TsComponent', () => {
  let component: RxJS.TsComponent;
  let fixture: ComponentFixture<RxJS.TsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxJS.TsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxJS.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
