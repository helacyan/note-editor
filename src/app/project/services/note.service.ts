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
  id: number = 1
  dynamicContent = ''

  getContent(newContent: string, tags: string[], id: number) {
    this.content = newContent
    this.tags = tags
    this.id = id;
    (<HTMLInputElement>document.querySelector(".text-input")).value = this.content
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
    console.log('checkContent')
    console.log((<HTMLInputElement>document.querySelector(".text-input")).value);
    if (this.id) {
      studentsData[this.id - 1].content = (<HTMLInputElement>document.querySelector(".text-input")).value
    }
  }
}
