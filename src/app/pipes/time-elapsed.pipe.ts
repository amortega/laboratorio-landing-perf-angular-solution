import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';

@Pipe({
  name: 'timeElapsed'
})
export class TimeElapsedPipe implements PipeTransform {

  transform(date: Date): string {
    if (!date) {
      return '';
    }
    return formatDistanceToNow(date);
  }

}
