import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInterceptorComponent } from './header-interceptor.component';

describe('HeaderInterceptorComponent', () => {
  let component: HeaderInterceptorComponent;
  let fixture: ComponentFixture<HeaderInterceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderInterceptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
