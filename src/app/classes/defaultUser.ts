import {IEmployee} from "../interfaces/employee.interface";

export class DefaultUser implements IEmployee{
  department: string = '';
  id: string = '';
  is_active: boolean = false;
  last_name: string = '';
  name: string = '';
  room: string = '';
}
