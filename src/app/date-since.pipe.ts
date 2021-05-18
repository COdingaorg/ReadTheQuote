import { Pipe, PipeTransform, Input } from '@angular/core';
import { QuoteClass } from '../app/quote-class';

@Pipe({
  name: 'dateSince',
  pure:false
})
export class DateSincePipe implements PipeTransform {

  @Input() 
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
