# Angular-Assignments

# Pipe :-
Pipes are an incredibly useful and clean way to transform data in the template in Angular. Their are two types of pipe. 1. Built In Pipe 2. Custom Pipe

## Custom Pipe :-
Create pipe using "ng g pipe PipeName".
        ```js
          import { Pipe, PipeTransform } from '@angular/core';
              @Pipe({
                 name: 'wordcount'
                 })s
         export class WordcountPipe implements PipeTransform {
               transform(value: any, args?: any): any {
               return value.trim().split(/\s+/).length;
               }
              ```

}
