import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PATH} from "../../global";
import {IEmployee} from "../interfaces/employee.interface";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  basicSearch(req: string) {
    console.log(`${PATH}/employee?q=${req}`)
    return this.http.get<IEmployee[]>(`${PATH}/employee?q=${req}`)
  }
}
