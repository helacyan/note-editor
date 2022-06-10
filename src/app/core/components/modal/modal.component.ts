import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { INoteItem } from 'src/app/project/models/note.model';
import { NoteService } from 'src/app/project/services/note.service';
import notesData from './../../../../assets/json/data.json';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(private dialogRef: MatDialogRef<ModalComponent>,
  public noteService: NoteService) {}

  name = new FormControl('', Validators.minLength(3));

  close() {
    this.dialogRef.close(false);
  }

  continue() {
    this.dialogRef.close(true);
    if (this.noteService.sourceData.length) {
      const ids = this.noteService.data.map((object: INoteItem) => {
        return object.id;
      });
      const max = Math.max(...ids);
      this.noteService.sourceData.push(  {
        "title": `${this.name.value}`,
        "content": "Enter your text",
        "tags": [],
        "id": max + 1,
        "index": 0
      },)
      this.noteService.data = this.noteService.sourceData;
      this.noteService.data = this.noteService.data.map((note: INoteItem, i: number) => {
        note.index = i
        return note
      })
    } else {
      this.noteService.sourceData.push(  {
        "title": `${this.name.value}`,
        "content": "Enter your text",
        "tags": [],
        "id": 1,
        "index": 0
      },)
      this.noteService.data = this.noteService.sourceData;
    }
  }

}
