import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PATH} from "../../global";
import {IEmployee} from "../interfaces/employee.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getCurrentUser() {
    return this.http.get<IEmployee>(`${PATH}/current_user`)
  }

  public changeUser(data: any) {
    return this.http.patch<IEmployee>(`${PATH}/current_user`, data)
  }
}
