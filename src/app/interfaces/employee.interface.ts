import {Requests} from "./requests.interface";
import IRequest = Requests.IRequest;

export interface IEmployee {
  id: string;
  name: string;
  last_name: string;
  is_active: boolean;
  room: string;
  department: string;
  requests?: IRequest[];
}
