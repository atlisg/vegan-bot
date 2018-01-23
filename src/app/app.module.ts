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
import { SelectBotComponent } from './select-bot/select-bot.component';
import { AboutComponent } from './about/about.component';

import { SelectBotService } from './select-bot/select-bot.service';
import { VeganSidekickService } from './answer-services/vegansidekick.service';
import { VeganNutritionistaService } from './answer-services/vegannutritionista.service';
import { VeganComService } from './answer-services/vegan.com.service';
import { VeganEasyService } from './answer-services/veganeasy.service';
import { AntsService } from './answer-services/ants.service';
import { AllTogetherService } from './answer-services/alltogether.service';
import { VivaService } from './answer-services/viva.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ChatComponent,
    SelectBotComponent,
    AboutComponent,
    SafeHtmlPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Ng2AutoCompleteModule,
    SimpleNotificationsModule.forRoot(),
    HttpClientModule,
    ShareButtonsModule.forRoot(),
  ],
  providers: [
    SelectBotService,
    VeganSidekickService,
    VeganNutritionistaService,
    VeganComService,
    VeganEasyService,
    AntsService,
    AllTogetherService,
    VivaService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
