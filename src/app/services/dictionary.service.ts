import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private data: {[key: string]: Record<any, any>[]} = {}

  setData(key: string, value: Record<any, any>[]) {
    this.data[key] = value;
  }

  getData(key: string) {
    return this.data[key];
  }
}
