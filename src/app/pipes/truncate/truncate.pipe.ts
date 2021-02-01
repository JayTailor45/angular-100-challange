import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string = '', length: number = 100): string {
    let avaliableChar = value.slice(0, length);
    if (value.length > length) {
      avaliableChar += '...';
    }
    return avaliableChar;
  }

}
