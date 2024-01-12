import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  title = 'Angular Box Example';

  // Sample data
  leftBox = { Topic: 'Left Side Box', Name: 'John', Email: 'john@example.com' };
  rightBox = { Topic: 'Right Side Box', Name: 'Jane', Email: 'jane@example.com' };
}
