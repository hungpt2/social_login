import { Component, OnInit } from '@angular/core';
import { LoginServices } from './login.services';

import { AccountKit, AuthResponse } from 'ng2-account-kit';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  phone: Boolean;
  user: any;

  constructor(
    private loginServices: LoginServices
  ) { }

  ngOnInit() {
    this.phone = true
  }

  loginWith(type) {
    console.log(type)
    // this.loginServices.loginViaFacebook().subscribe((response: any) => {
    //   console.log(response)
    // })

    let phoneNumber: string = '';
    let emailAddress: string = '';
    AccountKit.login(type, { countryCode: "+84", phoneNumber, emailAddress }).then(
      (response: AuthResponse) => {
        console.log(response.code);
      },
      (error: any) => console.error(error)
    );

  }

}
