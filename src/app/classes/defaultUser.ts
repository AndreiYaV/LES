import {IEmployee} from "../interfaces/employee.interface";

export class DefaultUser implements IEmployee{
  department = '';
  id = '';
  is_active = false;
  last_name = '';
  name = '';
  room = '';
}
