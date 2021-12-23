import {IEmployee} from "./employee.interface";

export namespace Contacts {
  export interface IDictionary {
    id: string;
    name: string;
  }

  export interface IBuilding extends IDictionary {
  }

  export interface IDepartment extends IDictionary {
  }

  export interface IRoom {
    id: string;
    name: string;
    building_id: string;
  }

  export interface IContactsData {
    buildings: IBuilding[];
    departments: IDepartment[];
    employees: IEmployee[];
    rooms: IRoom[];
  }
}
