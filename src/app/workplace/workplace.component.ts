import { Component, OnInit } from '@angular/core';
import { AuthenticationHelper } from '../shared/helpers/authentication-helper';
import { WorkplaceService } from 'src/app/core/services/workplace.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.scss']
})

export class WorkplaceComponent implements OnInit {
  userDataSubscription: Subscription;
  userData:any;

  constructor(
    private authenticationHelper: AuthenticationHelper,
    private workplaceService: WorkplaceService
  ) {
    this.userDataSubscription = this.workplaceService.userData$.subscribe(data => {
      this.userData = data;
    });
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
};
