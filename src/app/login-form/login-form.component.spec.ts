import { LoginFormComponent } from './login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestBed, inject, async } from '@angular/core/testing';
import { Component } from '@angular/core';

const expectedEmail = 'foo@gmail.com';
const expectedPassword = 'password';

// Isolated tests treat the component like a service (@Component extends
// @Injectable) and focus the test on the functions. This helps focus on
// writing pure functions and business logic.
describe('Isolated', () => {
  let subject: LoginFormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginFormComponent], // component here for isolated tests
      imports: [FormsModule, ReactiveFormsModule]
    });
  });

  beforeEach(
    inject([LoginFormComponent], (loginForm: LoginFormComponent) => {
      subject = loginForm;
    })
  );

  it('should send credentials on submit', () => {
    subject.submitted.subscribe(({ email, password }) => {
      expect(email).toEqual(expectedEmail);
      expect(password).toEqual(expectedPassword);
    });

    subject.onSubmit({ email: expectedEmail, password: expectedPassword });
  });
});

// Use shallow component tests for forms, especially template driven ones.
// This allows the test to trigger events like typing, focusing, clicking, etc.
// Reference the following:
// http://www.kirjai.com/testing-angular-forms-with-dispatchevent/
describe('Shallow', () => {
  beforeEach(
    // use async to create new zone and wait to be done with zone,
    // no more fiddling with done callback.
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LoginFormComponent], // component here for shallow tests
        imports: [FormsModule, ReactiveFormsModule]
      });
      TestBed.compileComponents();
    })
  );

  it('should send credentials on submit', () => {
    const fixture = TestBed.createComponent(LoginFormComponent);
    // Component instance (like the subject in shallow tests)
    const component: LoginFormComponent = fixture.componentInstance;
    const element = fixture.nativeElement; // HTML fragment

    // Do the first round of detectChanges() before attempting to access
    // the debugElements. Synchronizes the component and the generated HMTL.
    fixture.detectChanges();

    // Now that we have done detectChanges() we can use the nativeElement.

    // The following work because there are id fields in the template. In actual
    // practice, a query selector other than one based on id's will be needed.
    element.querySelector('#login-email').value = expectedEmail;
    element.querySelector('#login-email').dispatchEvent(new Event('input'));
    element.querySelector('#login-password').value = expectedPassword;
    element.querySelector('#login-password').dispatchEvent(new Event('input'));

    fixture.detectChanges();

    // start the observable
    component.submitted.subscribe(({ email, password }) => {
      expect(email).toEqual(expectedEmail);
      expect(password).toEqual(expectedPassword);
    });

    // fire the observable
    element.querySelector('button[type="submit"]').click();
  });
});

// Integration tests add a wrapper component to test that inputs and outputs
// work correctly as well as the template. The component around the subject
describe('Integrated', () => {
  @Component({
    selector: 'app-site',
    template: `<app-login-form [email]="email" (submitted)="onFormSubmit($event)"></app-login-form>`
  })
  class SiteComponent {
    email = expectedEmail;

    storedEmail: string;

    storedPassword: string;

    onFormSubmit({ email, password }) {
      this.storedEmail = email;
      this.storedPassword = password;
    }
  }

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LoginFormComponent, SiteComponent],
        imports: [FormsModule, ReactiveFormsModule]
      });
      TestBed.compileComponents();
    })
  );

  it('should send credentials on submit', () => {
    const fixture = TestBed.createComponent(SiteComponent);
    const component: SiteComponent = fixture.componentInstance;
    const element = fixture.nativeElement;

    fixture.detectChanges();

    expect(element.querySelector('#login-email').value).toEqual(expectedEmail);

    element.querySelector('#login-password').value = expectedPassword;
    element.querySelector('#login-password').dispatchEvent(new Event('input'));

    fixture.detectChanges();

    element.querySelector('button[type="submit"]').click();

    expect(component.storedEmail).toEqual(expectedEmail);
    expect(component.storedPassword).toEqual(expectedPassword);
  });
});
