import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {RequestService} from "./request.service";
import {catchError} from "rxjs/operators";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestResolverService implements Resolve<any> {

  constructor(private requestService: RequestService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.requestService.getRequestTypes().pipe(
      catchError(error => {
        return of ('No request type')
      })
    );
  }

}
