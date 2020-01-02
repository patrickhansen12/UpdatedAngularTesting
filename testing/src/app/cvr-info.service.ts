import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ICompany} from './company.model';

@Injectable({
  providedIn: 'root'
})
export class CvrService {

  constructor(private http: HttpClient) { }

  public getByVat(cc: string, vat: number): Observable<ICompany> {
    return this.http.get<ICompany>('https://cvrapi.dk/api?country=' + cc + '&vat=' + vat);
  }
}
