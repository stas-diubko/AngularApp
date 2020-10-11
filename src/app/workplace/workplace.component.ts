import { Component, OnInit } from '@angular/core';
import { AuthenticationHelper } from '../shared/helpers/authentication-helper';
import { WorkplaceService } from 'src/app/core/services/workplace.service';
import { Subscription } from 'rxjs';
import { UserDataView } from '../shared/models/workplace/user-data.view';
import { ResponseUserDataView } from '../shared/models/workplace/response/response-user-data.view';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.scss']
})

export class WorkplaceComponent implements OnInit {
  userDataSubscription: Subscription;
  userData: UserDataView = {
    name: '',
    surname: ''
  };
  urlPath: string

  constructor(
    private authenticationHelper: AuthenticationHelper,
    private workplaceService: WorkplaceService,
    private _router: Router
  ) {
    this.userDataSubscription = this.workplaceService.userData$.subscribe((data: ResponseUserDataView) => {
      this.userData.name = data.name;
      this.userData.surname = data.surname;
    });
    this.urlPath = _router.url
  };

  ngOnInit(): void {
    this.getUserData();
  };

  getUserData(): void {
    const userId = this.authenticationHelper.getUserId();
    this.workplaceService.getUserData(userId)
        
  }

  logout(): void {
    this.authenticationHelper.logout();
  };

  setNotes(): void {
    console.log(this.urlPath);
    
  };
};
