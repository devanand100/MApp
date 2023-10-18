import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToMinute'
})
export class SecondsToMinutePipe implements PipeTransform {

  transform(seconds: number, ): string {
    if(seconds === 0){
      return '00:00';
    }

    const minutesLeft = String(Math.floor(seconds/60));
    const secondsLeft = String(seconds % 60) ;

    return `${minutesLeft.padStart(2,'0')} : ${secondsLeft.padStart(2,'0')}`;
  }

}
