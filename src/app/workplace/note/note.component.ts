import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openAddNoteDialog(): void {
    const dialogRef = this.dialog.open(AddNoteDialog, {
      width: '250px',
      height: '400px',
    });
  }

}

@Component({
  selector: 'add-note-dialog',
  templateUrl: './add-note-dialog.html',
})
export class AddNoteDialog {

  constructor(
    public dialogRef: MatDialogRef<AddNoteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}