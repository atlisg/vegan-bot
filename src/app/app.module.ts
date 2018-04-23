import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
    BrowserModule.withServerTransition({ appId: 'vegan-bot' }),
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
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
