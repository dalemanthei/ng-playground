import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  formState = {
    address: ''
  };

  addressForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zip: new FormControl(),
  });

  constructor() { }

  ngOnInit() {
  }

}
