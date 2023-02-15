import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namesize'
})
export class NamesizePipe implements PipeTransform {

  transform(value: string): string {
    return  `${value} (${value.replace(' ', '').length})`;
  }

}
