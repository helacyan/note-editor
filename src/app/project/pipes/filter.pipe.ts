import { Pipe, PipeTransform } from '@angular/core';
import { INoteItem } from '../models/note.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(list: INoteItem[], search: string = ''): INoteItem[] {

    if (!search.trim()) {
      return list
    }
    return list.filter((d: INoteItem) => {
        return d.tags.includes(search) || d.tags.includes("#" + search)
    });

  }
}
