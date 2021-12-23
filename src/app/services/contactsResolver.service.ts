import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {catchError} from "rxjs/operators";
import {forkJoin, Observable, of} from "rxjs";
import {ContactsService} from "./contacts.service";
import {Contacts} from "../interfaces/contacts.interface";
import IContactsData = Contacts.IContactsData;

@Injectable({
  providedIn: 'root'
})
export class ContactsResolverService implements Resolve<IContactsData> {
  constructor(private contacts: ContactsService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return forkJoin({
      departments: this.contacts.getDepartments(),
      buildings: this.contacts.getBuildings(),
    }).pipe(
      catchError(error => {
        return of ('No data')
      })
    );
  }

}
