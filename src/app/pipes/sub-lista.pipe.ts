import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sublista'
})
export class SubListaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
