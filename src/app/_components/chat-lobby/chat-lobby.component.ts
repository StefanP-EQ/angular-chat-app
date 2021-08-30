import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-lobby',
  templateUrl: './chat-lobby.component.html',
  styleUrls: ['./chat-lobby.component.scss']
})
export class ChatLobbyComponent implements OnInit {

  user: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    /*if (!localStorage.getItem('user'))
      window.location.href = '/login';*/
  }

}
