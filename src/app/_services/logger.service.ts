import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  log(message: String) {
    console.log("[Logger] " + message);
  }
}
