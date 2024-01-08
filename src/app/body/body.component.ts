import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  bookingForm = new FormGroup({
    'name': new FormControl('', Validators.required),
    'office': new FormControl('', Validators.required),
    'address': new FormControl('', Validators.required),
    'gstNumber': new FormControl('', Validators.required),
    'idCardNumber': new FormControl('', Validators.required),
    'phoneNumber': new FormControl('', Validators.required),
    'idCardType': new FormControl('', Validators.required),
    'cars': new FormControl('', Validators.required),
    'sikkimese': new FormControl('', Validators.required),
 });

  // onSubmit() {
  //   if (this.bookingForm.valid) {
  //     // Validation successful, open a new page
  //     window.open('new-page.html', '_blank'); // Or navigate using Angular Router
  //   } else {
  //     // Validation failed, show a warning popup
  //     alert('Please fill in all required fields correctly.');
  //   }
  onSubmit() {
    if (this.bookingForm.valid) {
      console.log('Form Submitted!', this.bookingForm.value);
    } else {
      console.log('Form is invalid! Please check.');
    }
  }
}


