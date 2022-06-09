import { Injectable } from '@angular/core';
import studentsData from './../../../assets/json/data.json';

@Injectable({
  providedIn: 'root',
})
export class NoteService {

  constructor() {}

  content = ''
  tags: string[] = []
  data = studentsData
  id: number = 0
  index: number = 0

  getContent(newContent: string, tags: string[], id: number, index: number) {
    this.content = newContent
    this.tags = tags
    this.id = id;
    this.index = index
    if (<HTMLInputElement>document.querySelector(".text-input")) {
      (<HTMLInputElement>document.querySelector(".text-input")).value = this.content
    }
  }

  deleteTag(tagData: string) {
    if (this.id) {
      this.data[this.id - 1].tags = this.data[this.id - 1].tags.filter((tag: string | null) => {
        return tag == tagData ? 0 : 1
      })
      this.tags = this.data[this.id - 1].tags
    }
  }

  checkContent() {
    if (this.id) {
      studentsData[this.id - 1].content = (<HTMLInputElement>document.querySelector(".text-input")).value
    }
  }

  deleteNote() {
    if (this.id) {
      this.data = this.data.filter((note: any) => {
        return note.id == this.id ? 0 : 1
      });
      (<HTMLInputElement>document.querySelector(".text-input")).value = ''
      this.tags = []
      this.content = ''
      this.id = 0
    }
    this.data = this.data.map((note: any, i: number) => {
      note.index = i
      return note
    })
  }
}
