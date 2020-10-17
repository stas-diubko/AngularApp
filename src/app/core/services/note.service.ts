import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ResponseNoteDataView } from 'src/app/shared/models/workplace/response/response-note-data.view';
import { RequestAddNoteView } from 'src/app/shared/models/workplace/request/request-add-note.view';

@Injectable({
    providedIn: 'root'
})

export class NoteService {
    private readonly apiUrl: string;

    constructor(private http: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }

    addNote(data: RequestAddNoteView): Observable<ResponseNoteDataView> {
        return this.http.post<ResponseNoteDataView>(this.apiUrl + "notes", data);
    };
    getNotes(userId: string): Observable<Array<ResponseNoteDataView>> {
        return this.http.get<Array<ResponseNoteDataView>>(this.apiUrl + `notes?userId=${userId}`);
    };
};