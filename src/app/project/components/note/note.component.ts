import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HighlightTag } from 'angular-text-input-highlight';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoteComponent implements OnInit {

  constructor(public noteService: NoteService) { }

  isEdit = true;

  ngOnInit(): void {
    this.highlightTags();
  }

  toggleEdit(): void {
    this.isEdit = !this.isEdit
    this.highlightTags();
  }

  tags: HighlightTag[] = [];
  tagClicked!: HighlightTag;

  highlightTags() {
    this.tags = [];
    const matchHashtags = /(#\w+) ?/g;
    let hashtag;
    while ((hashtag = matchHashtags.exec(this.noteService.content))) {
      this.tags.push({
        indices: {
          start: hashtag.index,
          end: hashtag.index + hashtag[1].length
        },
        cssClass: !this.isEdit ?  'bg-blue' : 'bg-white',
        data: hashtag[1]
      });
    }
    let mention: any;
    this.noteService.tags?.map( el => {
      let targetWord = el.split('#')[1]
      let re = new RegExp(targetWord, "gm");
      while ((mention = re.exec(this.noteService.content))) {
        if (this.noteService.content.charAt(mention.index - 1) !== '#') {
          this.tags = this.tags.filter(tag => {
            return tag.indices.start == mention.index ? 0 : 1
           })
          this.tags.push({
            indices: {
              start: mention.index,
              end: mention.index + targetWord.length
            },
            cssClass: !this.isEdit ? 'bg-pink' : 'bg-white',
            data: mention[0]
          });
        }
      }
    })
  }

  addDarkClass(elm: HTMLElement) {
    if (elm.classList.contains('bg-blue')) {
      elm.classList.add('bg-blue-dark');
    } else if (elm.classList.contains('bg-pink')) {
      elm.classList.add('bg-pink-dark');
    }
  }

  removeDarkClass(elm: HTMLElement) {
    elm.classList.remove('bg-blue-dark');
    elm.classList.remove('bg-pink-dark');
  }


}
