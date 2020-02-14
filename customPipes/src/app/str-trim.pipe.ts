import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strTrim'
})
export class StrTrimPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let newStr =value.trim();
    return newStr;
  }

}
