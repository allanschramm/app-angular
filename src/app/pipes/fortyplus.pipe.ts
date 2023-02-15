import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fortyplus'
})
export class FortyplusPipe implements PipeTransform {

  transform(value: number): string | number {
    return value >= 40 ? value + ' (40+)' : value;
  }

}
