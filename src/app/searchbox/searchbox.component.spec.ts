/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchboxComponent } from './searchbox.component';

// describe('SearchboxComponent', () => {
//   let component: SearchboxComponent;
//   let fixture: ComponentFixture<SearchboxComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ SearchboxComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SearchboxComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
describe('SearchboxComponent (Shallow)', () => {
  beforeEach(
    // use async to create new zone and wait to be done with zone,
    // no more fiddling with done callback.
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SearchboxComponent], // component here for shallow tests
        imports: [FormsModule, ReactiveFormsModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      });
      TestBed.compileComponents();
    })
  );

  it('should send credentials on submit', () => {
    // const fixture = TestBed.createComponent(LoginFormComponent);
    // // Component instance (like the subject in shallow tests)
    // const component: LoginFormComponent = fixture.componentInstance;
    // const element = fixture.nativeElement; // HTML fragment
    // // Do the first round of detectChanges() before attempting to access
    // // the debugElements. Synchronizes the component and the generated HMTL.
    // fixture.detectChanges();
    // // Now that we have done detectChanges() we can use the nativeElement.
    // // The following work because there are id fields in the template. In actual
    // // practice, a query selector other than one based on id's will be needed.
    // element.querySelector('#login-email').value = expectedEmail;
    // element.querySelector('#login-email').dispatchEvent(new Event('input'));
    // element.querySelector('#login-password').value = expectedPassword;
    // element.querySelector('#login-password').dispatchEvent(new Event('input'));
    // fixture.detectChanges();
    // // start the observable
    // component.submitted.subscribe(({ email, password }) => {
    //   expect(email).toEqual(expectedEmail);
    //   expect(password).toEqual(expectedPassword);
    // });
    // // fire the observable
    // element.querySelector('button[type="submit"]').click();
  });
});
