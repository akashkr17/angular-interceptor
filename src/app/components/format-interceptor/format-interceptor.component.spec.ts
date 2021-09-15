import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatInterceptorComponent } from './format-interceptor.component';

describe('FormatInterceptorComponent', () => {
  let component: FormatInterceptorComponent;
  let fixture: ComponentFixture<FormatInterceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatInterceptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
