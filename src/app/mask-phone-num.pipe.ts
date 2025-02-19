import { Pipe, PipeTransform } from '@angular/core';
import { Trainer } from './trainer.interface';



@Pipe({
  name: 'maskPhoneNum',
  standalone: false
})
export class MaskPhoneNumPipe implements PipeTransform {

  transform(phoneNum: string): string {
    return phoneNum.slice(0,3) + "****" + phoneNum.slice(6,10);
  }

}
