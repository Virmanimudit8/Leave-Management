import { TestBed } from '@angular/core/testing';
import { LeaveRequestComponent } from './leave-request.component';

describe('LeaveRequestComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LeaveRequestComponent],
    });
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(LeaveRequestComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
