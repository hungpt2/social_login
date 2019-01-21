import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import URL from '../shared/url';
import { HttpClient } from '../shared/interceptor';

@Injectable()
export class LoginServices {

  constructor(
    private httpClient: HttpClient
  ) { }

  loginViaFacebook() {
    console.log('login via facebook')

  }

}