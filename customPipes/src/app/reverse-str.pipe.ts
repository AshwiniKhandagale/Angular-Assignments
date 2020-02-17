import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseStr'
})
export class ReverseStrPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
  // reverse string using singe line of program 
  console.log('value: ', value.split("").reverse().join(""));
  let reverseString="";
  for (let index = value.length-1; index >=0; index--) {
  let reverse= value.charAt(index);
  reverseString+=reverse;
  }
    

    return reverseString;
  }

}
