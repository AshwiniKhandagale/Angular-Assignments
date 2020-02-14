import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
   let upperCaseLetter= value.toUpperCase();
   return  upperCaseLetter;
  }

}
