import { Fragment } from './../model/fragment.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParagraphService {

  constructor(private _http: HttpClient) { }

  getParagraph():Observable<Fragment> {
    const url = 'https://60e8862c673e350017c218eb.mockapi.io/enrolation/api/v1/fragments';
    return this._http.get<Fragment>(url);
  }
}
