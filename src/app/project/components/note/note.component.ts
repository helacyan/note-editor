import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(public noteService: NoteService) { }

  isEdit = true;

  ngOnInit(): void {
  }

  toggleEdit(): void {
    this.isEdit = !this.isEdit
  }



}
