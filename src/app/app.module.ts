import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ChatComponent, SafeHtmlPipe } from './chat/chat.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { SelectBotService } from './select-bot/select-bot.service';
import { AnswerService } from './answer-services/answer.service';
import { ThemeService } from './theme/theme.service';
import { EmailService } from './email/email.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ChatComponent,
    AboutComponent,
    ContactComponent,
    SafeHtmlPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Ng2AutoCompleteModule,
    HttpClientModule,
    ShareButtonsModule.forRoot(),
    FormsModule,
  ],
  providers: [SelectBotService, AnswerService, ThemeService, EmailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
