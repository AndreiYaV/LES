import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diffDate'
})
export class DiffDatePipe implements PipeTransform {

  transform(endDate: Date, startDate: Date): number {
    return Math.floor(((new Date(endDate).getTime() - new Date(startDate).getTime()) / 1000 / 60 / 60 / 24) + 1);
  }

}
