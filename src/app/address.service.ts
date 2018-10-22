import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: Http) { }

  getAddresses(): any {
    return this.http.get("http://www.mocky.io/v2/581335f71000004204abaf83")
      .pipe(map(res => res.json()));
  }
}
