import { Component } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';
import { LoggerService } from './_services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  name: String = "";

  constructor(private logger: LoggerService) {
  }

  succesfulLogin(name: String) {
    this.logger.log("Succesful login for: " + name);
  }

}
