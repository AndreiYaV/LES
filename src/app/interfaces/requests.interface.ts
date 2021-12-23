export namespace Requests {
  export interface IRequest {
    id: string;
    type_id: IRequestType;
    start_date: Date;
    end_date: Date;
    days: number;
    comment?: string;
    created: Date;
  }

  export interface IRequestType {
    id: string;
    name: string;
  }
}
