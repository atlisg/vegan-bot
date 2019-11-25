import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CreatedByComponent } from './createdby/createdby.component';
import { ContactComponent } from './contact/contact.component';
import { ChatComponent } from './chat/chat.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'createdby', component: CreatedByComponent },
  { path: 'chat/:answer', component: ChatComponent },
  { path: 'chat', component: ChatComponent },
  { path: '**', redirectTo: '/chat' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
