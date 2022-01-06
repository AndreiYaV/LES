import {Injectable} from "@angular/core";
import {Contacts} from "../interfaces/contacts.interface";
import IDepartment = Contacts.IDepartment;
import {ContactsService} from "./contacts.service";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  public departments: IDepartment[] = [];

  constructor(private contactsService: ContactsService) {
    this.contactsService.getDepartments().subscribe(department => this.departments = department)
  }

  private data: {[key: string]: Record<any, any>[]} = {}

  setData(key: string, value: Record<any, any>[]) {
    this.data[key] = value;
  }

  getData(key: string) {
    return this.data[key];
  }

}
