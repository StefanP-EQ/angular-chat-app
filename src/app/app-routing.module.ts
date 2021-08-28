import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatLobbyComponent } from './_components/chat-lobby/chat-lobby.component';
import { LoginPromptComponent } from './_components/login-prompt/login-prompt.component';

const routes: Routes = [
  {path: 'login', component: LoginPromptComponent},
  {path: '**', component: ChatLobbyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
