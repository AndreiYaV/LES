import {IRequest} from "./request.interface";

export interface IEmployee {
  id: string;
  name: string;
  last_name: string;
  is_active: boolean;
  room: string;
  department: string;
  requests?: IRequest[];
}
