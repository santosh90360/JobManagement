import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobProviderRegistrationComponent } from './job-provider-registration.component';

describe('JobProviderRegistrationComponent', () => {
  let component: JobProviderRegistrationComponent;
  let fixture: ComponentFixture<JobProviderRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobProviderRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobProviderRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
