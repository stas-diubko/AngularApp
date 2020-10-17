import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/core/services/note.service';
import { AuthenticationHelper } from 'src/app/shared/helpers/authentication-helper';
import { RequestAddNoteView } from 'src/app/shared/models/workplace/request/request-add-note.view';
import { ResponseNoteDataView } from 'src/app/shared/models/workplace/response/response-note-data.view';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input()
  notes: Array<ResponseNoteDataView>;
  constructor(
    public dialog: MatDialog,
    private noteService: NoteService,
    private authenticationHelper: AuthenticationHelper
  ) { }

  ngOnInit(): void {
    this.getNotes()
  }

  ngOnChanges(): void {
    console.log('changed');
    
  }

  getNotes(): void {
    const userId: string = this.authenticationHelper.getUserId();
    this.noteService.getNotes(userId).subscribe(response => {
      this.notes = response;
    });
  };

  openAddNoteDialog(): void {
    const dialogRef = this.dialog.open(AddNoteDialog, {
      panelClass: 'add-note-dialog'
    });
  };
};

@Component({
  selector: 'add-note-dialog',
  templateUrl: './add-note-dialog.html',
  styleUrls: ['./note.component.scss'],
  providers: [NoteComponent]
})
export class AddNoteDialog {
  htmlContent: string;
  constructor(
    public dialogRef: MatDialogRef<AddNoteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private noteService: NoteService,
    private noteComponent: NoteComponent
  ) { };

  onNoClick(): void {
    this.dialogRef.close();
  };

  test(): void {
    const data: RequestAddNoteView = {
      title: 'test title',
      text: this.htmlContent,
    };
    this.noteService.addNote(data).subscribe(() => {
      this.htmlContent = '';
      this.dialogRef.close();
      this.noteComponent.getNotes();
    });
  };
};