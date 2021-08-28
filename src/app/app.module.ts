import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPromptComponent } from './_components/login-prompt/login-prompt.component';
import { FormsModule } from '@angular/forms';
import { ChatLobbyComponent } from './_components/chat-lobby/chat-lobby.component';
import { HeaderComponent } from './_components/header/header.component';
import { AuthenticationService } from './_services/authentication.service';
import { ChatRoomComponent } from './_components/chat-room/chat-room.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPromptComponent,
    ChatLobbyComponent,
    HeaderComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
