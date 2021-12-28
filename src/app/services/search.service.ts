import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PATH} from "../../global";
import {IEmployee} from "../interfaces/employee.interface";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  queryParamsSort = '_sort=last_name';
  paginationStart = '&_start=';
  paginationStop = '&_end=';

  constructor(
    private http: HttpClient,
  ) {}

  basicSearch(req: string, start: number, stop: number) {
    return this.http.get<IEmployee[]>
    (`${PATH}/employee?q=${req}&${this.queryParamsSort}${this.paginationStart}${start}${this.paginationStop}${stop}`,
      {observe: 'response'})
  }
}
