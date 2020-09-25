import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class WorkplaceService {
    private readonly apiUrl: string;
    userData: Subject<string> = new Subject();
    userData$ = this.userData.asObservable();

    constructor(private http: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }

    getUserData(userId: string): any {
        return this.http.get<any>(this.apiUrl + `users/getOne?userId=${userId}`).subscribe(response => {
            this.userData.next(response);
        });
    };

}