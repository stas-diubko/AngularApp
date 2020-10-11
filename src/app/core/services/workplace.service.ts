import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ResponseUserDataView } from 'src/app/shared/models/workplace/response/response-user-data.view';

@Injectable({
    providedIn: 'root'
})

export class WorkplaceService {
    private readonly apiUrl: string;
    userData: Subject<ResponseUserDataView> = new Subject();
    userData$ = this.userData.asObservable();

    constructor(private http: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }

    getUserData(userId: string): Subscription {
        return this.http.get<ResponseUserDataView>(this.apiUrl + `users/getOne?userId=${userId}`).subscribe(response => {
            this.userData.next(response);
        });
    };

}