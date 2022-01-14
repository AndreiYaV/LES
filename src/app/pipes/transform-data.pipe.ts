import { Pipe, PipeTransform } from '@angular/core';
import {Contacts} from "../interfaces/contacts.interface";
import IDepartment = Contacts.IDepartment;

@Pipe({
  name: 'transformData'
})
export class TransformDataPipe implements PipeTransform {

  transform(id: string, departments: IDepartment[]) {
    return departments.find(department => department.id === id)?.name
  }
}
