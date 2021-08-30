import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { LoggerService } from 'src/app/_services/logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-prompt',
  templateUrl: './login-prompt.component.html',
  styleUrls: ['./login-prompt.component.scss']
})
export class LoginPromptComponent implements OnInit {

  loginName: string = "";
  loginPassword: string = "";

  @Output() succesfulLoginEvent = new EventEmitter<string>();
  @Output() failedLoginEvent = new EventEmitter<string>();

  constructor(private logger: LoggerService, private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onLoginSubmit() {
    this.logger.log("Trying to log in with [email]: " + this.loginName + " | [password]: " + this.loginPassword);
    let result = this.auth.signIn({name: this.loginName, password: this.loginPassword});

    //result? this.succesfulLoginEvent.emit(this.loginName) : this.failedLoginEvent.emit(this.loginName);
  }
}
