import { Component, OnInit } from '@angular/core';
import { AuthenticationHelper } from '../shared/helpers/authentication-helper';

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.scss']
})

export class WorkplaceComponent implements OnInit {

  constructor(
    private authenticationHelper: AuthenticationHelper
  ) { }

  ngOnInit(): void {
  };

  logout(): void {
    this.authenticationHelper.logout();
  };
};
