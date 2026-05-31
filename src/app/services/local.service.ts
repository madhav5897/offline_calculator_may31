import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
 import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root',
})
export class LocalService {

  baseurl:any;

  constructor(private http: HttpClient) {
  
  }



  //Post Api Code
  public Post(url: string, data: any, options: object): Observable<any> {
    const headerOption = {
      headers: new HttpHeaders({ ...options })
    }
    console.log(url, data);

    let reqdata = { "_data": this.encrypt(data) }
    if (url.includes('group')) {
      return this.http.post(url, data, headerOption).pipe(map(res => res), catchError(this.handleError));
    }
    else if (url.includes('RenewRequestOTP') || url.includes('RenewWithMobileNumber') || url.includes('CheckRenewDetails')) {
      return this.http.post(this.baseurl + url, reqdata, headerOption).pipe(map(res => res), catchError(this.handleError));
    }
    else if (url.includes('RequestOTP')) {
      return this.http.post(this.baseurl + url, reqdata, headerOption).pipe(map(res => res), catchError(this.handleError));
    }
    else {
      return this.http.post(this.baseurl + url, reqdata, headerOption).pipe(map(res => res), catchError(this.handleError));
    }

  }

  //GET Api Code
  public Get(url: string, options?: object) {
    const headerOption = {
      headers: new HttpHeaders({ ...options })
    }
    return this.http.get(this.baseurl + url, headerOption).pipe(map(res => res), catchError(this.handleError));
  }


//         

        private handleError(error: HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
          }
          else {
            console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
          }
          return throwError('Something bad happened; please try again later.');
        }
      
      }