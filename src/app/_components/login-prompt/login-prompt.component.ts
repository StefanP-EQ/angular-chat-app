import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-prompt',
  templateUrl: './login-prompt.component.html',
  styleUrls: ['./login-prompt.component.scss']
})
export class LoginPromptComponent implements OnInit {

  loginEmail: String = "";
  loginPassword: String = "";

  constructor() { }

  ngOnInit(): void {
  }

  onLoginSubmit() {
  }
}
