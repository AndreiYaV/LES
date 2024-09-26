import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PATH} from "../../global";
import {IEmployee} from "../interfaces/employee.interface";
import {BehaviorSubject, Observable} from "rxjs";
import {DefaultUser} from "../classes/defaultUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject$: BehaviorSubject<IEmployee> = new BehaviorSubject<IEmployee>(new DefaultUser());
  public currentUser$ = this.currentUserSubject$.asObservable();

  constructor(private http: HttpClient) {}

  public getCurrentUser() {
    return this.http.get<IEmployee>(`${PATH}/current_user`)
      .subscribe(user => this.currentUserSubject$.next(user))
  }

  public addUserRequest(req: IEmployee): Observable<IEmployee> {
    return this.http.patch<IEmployee>(`${PATH}/employee/${req.id}`, req);
  }

  public changeUser(data: any) {
    return this.http.post<IEmployee>(`${PATH}/current_user`, data)
  }
}
