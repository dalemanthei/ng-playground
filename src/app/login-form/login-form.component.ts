import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// This component is an exercise in testing based on the post at
// https://auth0.com/blog/angular-testing-in-depth-components/?utm_campaign=NG-Newsletter&utm_medium=email&utm_source=NG-Newsletter_209
// The most interesting part of it is in the login-form spec.
//
// There are three kinds of tests: Isolated, Shallow, and Integrated. See the
// spec for more details and working examples of each.

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnChanges {
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  @Input() email: string;

  @Output() submitted = new EventEmitter();

  ngOnChanges(change) {
    if (change.email) {
      this.loginForm.controls['email'].setValue(change.email.currentValue);
    }
  }

  onSubmit({ email, password }) {
    this.submitted.emit({ email, password });
  }
}
