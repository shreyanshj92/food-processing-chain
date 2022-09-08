import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/shared/authentication.service';
import { Role } from 'src/app/shared/models/roles';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loading = false;
    user: User;
    userFromApi: User = new User();

    constructor(
        private authenticationService: AuthenticationService
    ) {
        this.user = this.authenticationService.userValue;
    }

    ngOnInit() {
        this.loading = true;
        this.userFromApi = {
          id: 101,
          firstName: "Shreyansh",
          lastName: "Jain",
          username: "user",
          role: Role.Admin,
          token: "xyz",
          url:"user"
        };
    }

}
