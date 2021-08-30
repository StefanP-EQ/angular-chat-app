import { Injectable } from '@angular/core';
import { AuthenticationType } from '../_interfaces/authenticationtype';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private logger: LoggerService) {

  }

  signIn(account: AuthenticationType): Boolean {
    this.logger.log("Signing in...");
    //login logic
    localStorage.setItem('user', account.name);
    return true;
  }

  signOut() {
    this.logger.log("Signing out...");
    localStorage.clear();
    window.location.href = "/login";
  }
}
