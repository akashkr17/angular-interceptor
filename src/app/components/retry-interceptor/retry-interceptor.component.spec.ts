import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryInterceptorComponent } from './retry-interceptor.component';

describe('RetryInterceptorComponent', () => {
  let component: RetryInterceptorComponent;
  let fixture: ComponentFixture<RetryInterceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetryInterceptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetryInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
