import { Component } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent {
  users = [];
  constructor (private userService: UsersService) {
  }
  ngOnInit() {
    // this.users = this.userService.users;
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
