import { Component, OnInit } from '@angular/core';

import { Role } from 'src/app/shared/models/roles';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  loading = false;
    users: User[] = [];

    constructor() { }

    ngOnInit() {
        this.loading = true;
        this.users = [{
          id: 101,
          firstName: "Shreyansh",
          lastName: "Jain",
          username: "admin",
          role: Role.Admin,
          token: "xyz",
          url:"admin"
        }];
    }

}
