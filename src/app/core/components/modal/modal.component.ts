import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NoteService } from 'src/app/project/services/note.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(private dialogRef: MatDialogRef<ModalComponent>,
  public noteService: NoteService) {}

  name = new FormControl('');

  close() {
    this.dialogRef.close(false);
  }

  continue() {
    this.dialogRef.close(true);
    this.noteService.data.push(  {
      "title": `${this.name.value}`,
      "content": "",
      "tags": [],
      "id": this.noteService.data.length + 1,
      "index": 0
    },)
    this.noteService.data = this.noteService.data.map((note: any, i: number) => {
      note.index = i
      return note
    })
  }

}
