import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-leave-request',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <label>
        Start Date:
        <input type="date" formControlName="startDate" />
      </label>
      <label>
        End Date:
        <input type="date" formControlName="endDate" />
      </label>
      <label>
        Reason:
        <input formControlName="reason" />
      </label>
      <button type="submit" [disabled]="form.invalid">Submit</button>
    </form>
    <pre *ngIf="submitted">{{ form.value | json }}</pre>
  `,
})
export class LeaveRequestComponent {
  form = this.fb.group({
    startDate: [''],
    endDate: [''],
    reason: [''],
  });
  submitted = false;

  constructor(private fb: FormBuilder) {}

  submit() {
    this.submitted = true;
  }
}
