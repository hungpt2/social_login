import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpClient {

  constructor(private http: Http) { }

  createAuthorizationHeader() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return headers
  }

  get(url: any, params: any) {
    return this.http.get(url);
  }
}
