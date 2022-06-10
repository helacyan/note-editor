import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(list: any, search: string = ''): any {

    if (!search.trim()) {
      return list
    }
    return list.filter((d: any) => {
        return d.tags.includes(search) || d.tags.includes("#" + search)
    });

  }
}
