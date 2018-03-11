import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { HttpClientModule } from '@angular/common/http';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ChatComponent, SafeHtmlPipe } from './chat/chat.component';
import { AboutComponent } from './about/about.component';

import { SelectBotService } from './select-bot/select-bot.service';
import { AnswerService } from './answer-services/answer.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, IntroComponent, ChatComponent, AboutComponent, SafeHtmlPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Ng2AutoCompleteModule,
    SimpleNotificationsModule.forRoot(),
    HttpClientModule,
    ShareButtonsModule.forRoot(),
  ],
  providers: [SelectBotService, AnswerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
