import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalService } from 'src/app/core/services/modal/modal.service';
import { ModalComponent } from '../components/modal/modal.component';
import { INoteItem } from '../models/note.model';
import notesData from './../../../assets/json/data.json';

@Injectable({
  providedIn: 'root',
})
export class NoteService {

  constructor(public modalService: ModalService, private dialog: MatDialog,) {}

  content = ''
  tags: string[] | null = []
  sourceData = notesData
  data = this.sourceData
  id: number = 0
  index: number = 0
  title = ''

  getContent(newContent: string, id: number, index: number, title: string) {
    this.content = newContent
    this.tags = newContent.match(/#[a-z0-9]+/gi)
    this.id = id;
    this.index = index
    this.title = title
    if (<HTMLInputElement>document.querySelector(".text-input")) {
      (<HTMLInputElement>document.querySelector(".text-input")).value = this.content
    }
    const children = document.querySelectorAll<HTMLElement>('.note');
    for (let i = 0; i < children.length; i++) {
      i == this.index ? children[i].style.color = 'rgb(250, 169, 169)' : children[i].style.color = 'white';
    }
  }

  deleteTag(tagData: string) {
    if (this.id) {
      this.data[this.id - 1].tags = this.data[this.id - 1].tags.filter((tag: string | null) => {
        return tag == tagData ? 0 : 1
      })
      this.tags = this.data[this.id - 1].tags
    }
    this.sourceData[this.id - 1].content = this.sourceData[this.id - 1].content.replaceAll(tagData,'').trim();
    (<HTMLInputElement>document.querySelector(".text-input")).value = this.sourceData[this.id - 1].content.trim()
  }

  checkContent() {
    if (this.id) {
      this.sourceData[this.id - 1].content = (<HTMLInputElement>document.querySelector(".text-input")).value
      this.tags = this.sourceData[this.id - 1].content.match(/#[a-z0-9]+/gi)
      this.data[this.id - 1].tags = this.sourceData[this.id - 1].content.match(/#[a-z0-9]+/gi);
    }
  }

  deleteNote() {
    this.openDialog().subscribe((res) => {
      if (res) {
        if (this.id) {
          this.data = this.data.filter((note: INoteItem) => {
            return note.id == this.id ? 0 : 1
          });
          (<HTMLInputElement>document.querySelector(".text-input")).value = ''
          this.tags = []
          this.content = ''
          this.id = 0
        }
        this.data = this.data.map((note: INoteItem, i: number) => {
          note.index = i
          return note
        })
        this.sourceData = this.data
      }
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      top: 'calc(170px + 2rem)',
    };
    return this.dialog.open(ModalComponent, dialogConfig).afterClosed()
  }

}
