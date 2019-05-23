import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // this one make the pipe actualise every time the page change it costs a lot of performance
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const result = [];
    const props = Object.keys(value[0]);

    for (const prop of props) {
      for (const item of value) {
        if (prop !== 'started') {
          if (item[prop].includes(filterString)) {
            result.push(item);
          }
        }
      }
    }
    return result;
  }

}
