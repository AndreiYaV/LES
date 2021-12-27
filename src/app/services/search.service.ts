import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PATH} from "../../global";
import {IEmployee} from "../interfaces/employee.interface";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(
    private http: HttpClient,
  ) {}

  basicSearch(req: string) {
    return this.http.get<IEmployee[]>(`${PATH}/employee?q=${req}&_sort=last_name`)
  }
}
