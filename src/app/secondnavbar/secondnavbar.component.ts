import { Component } from '@angular/core';

@Component({
  selector: 'app-secondnavbar',
  templateUrl: './secondnavbar.component.html',
  styleUrls: ['./secondnavbar.component.css']
})
export class SecondnavbarComponent {
  showDropdown = false;
  selectService(service: string) {
    // Add logic here to handle the selected service
    console.log(`Selected service: ${service}`);
  }
}