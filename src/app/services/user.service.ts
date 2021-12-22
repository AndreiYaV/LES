import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  path = `${environment.apiUrl}:${environment.port}`;

  constructor(private http: HttpClient) {}

  public getCurrentUser() {
    return this.http.get(`${this.path}/current_user`)
  }
}
