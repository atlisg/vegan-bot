import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'chat/:answer', component: ChatComponent },
  { path: 'chat', component: ChatComponent },
  { path: '**', redirectTo: '/intro' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
