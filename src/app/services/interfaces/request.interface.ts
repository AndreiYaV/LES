import {IRequestType} from "./request-type.interface";

export interface IRequest {
  id: string;
  type_id: IRequestType;
  start_date: Date;
  end_date: Date;
  days: number;
  comment?: string;
  created: Date;
}
