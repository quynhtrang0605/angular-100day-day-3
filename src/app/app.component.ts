import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  // data binding
  // inputType = 'text';

  // tạo 1 obj mới
  // nếu để private user thì sẽ báo lỗi vì k trích xuất được
  user = {
    name: 'Trang',
    age: 22,
  };

  handler(event) {
    console.log('clicked', event);
  }
}
