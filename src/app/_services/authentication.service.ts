import { Injectable } from '@angular/core';
import { AuthenticationType } from '../_interfaces/authenticationtype';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private logger: LoggerService) {

  }

  signIn(account: AuthenticationType) {
    this.logger.log("Signing in...");
  }

  signOut() {
    this.logger.log("Signing out...");
    localStorage.clear();
    window.location.href = "/login";
  }
}
