import { Component, OnInit, ElementRef, Pipe, PipeTransform } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { HttpModule } from '@angular/http';
import { Subscription } from 'rxjs/Rx';
import { VeganSidekickService } from '../answer-services/vegansidekick.service';
import { VeganNutritionistaService } from '../answer-services/vegannutritionista.service';
import { VeganComService } from '../answer-services/vegan.com.service';
import { VeganEasyService } from '../answer-services/veganeasy.service';
import { AntsService } from '../answer-services/ants.service';
import { AllTogetherService } from '../answer-services/alltogether.service';
import { VivaService } from '../answer-services/viva.service';
import { Bot } from '../models/bot.interface';
import { Answer } from '../models/answer.interface';
import { SelectBotService } from '../select-bot/select-bot.service';
import { triggerOptions } from './trigger.options';

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    console.log(this.sanitized.bypassSecurityTrustHtml(value));
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  animations: [
    trigger('yourInputHeaderState', triggerOptions(0)),
    trigger('yourInputState', triggerOptions(400)),
    trigger('botAnswerHeaderState', triggerOptions(800)),
    trigger('botAnswerState', triggerOptions(1200)),
    trigger('shareButtonState', triggerOptions(2000)),
  ],
})
export class ChatComponent implements OnInit {
  private botSubscription: Subscription;
  selectedBot: Bot;
  selectedAnswer: Answer;
  answers: Array<Answer>;
  state: string = 'inactive';
  placeholders: Array<string>;
  nextPlace: number;
  options: any;

  constructor(
    private elementRef: ElementRef,
    private selectBotService: SelectBotService,
    private veganSidekickService: VeganSidekickService,
    private veganNutritionistaService: VeganNutritionistaService,
    private veganComService: VeganComService,
    private veganEasyService: VeganEasyService,
    private antsService: AntsService,
    private allTogetherService: AllTogetherService,
    private vivaService: VivaService,
    private router: Router,
    private _notificationsService: NotificationsService
  ) {
    this.placeholders = ['Lets talk', 'Chat with me', 'Fire away', "What's up?"];
    this.nextPlace = 0;
    const url = this.router.url.split('/');
    const botIndex = url[2];
    this.selectedBot = this.selectBotService.getBot(botIndex);
    if (!this.selectedBot) {
      this.router.navigate(['/intro']);
      return;
    }
    if (this.selectedBot !== this.selectBotService.getCurrentBot()) {
      this.selectBotService.botChanged(this.selectedBot);
    }
    this.answers = this[this.selectedBot.serviceName]
      ? this[this.selectedBot.serviceName].answers
      : [];
    if (url.length > 3) {
      const answerIndex = url[3];
      this.selectedAnswer = this.answers.find(value => value.index === answerIndex);
      if (!this.selectedAnswer) {
        this.router.navigate(['/intro']);
        return;
      }
    }
    this.options = {
      timeOut: 5000,
      maxStack: 1,
    };
  }

  ngOnInit() {
    this.botSubscription = this.selectBotService.bot.subscribe(b => {
      this.selectedBot = b;
      this.answers = this[this.selectedBot.serviceName]
        ? this[this.selectedBot.serviceName].answers
        : [];
    });
  }

  formatAnswer(answer) {
    return '';
  }

  formatList(answer) {
    return `<div class="answer-key">${answer.key}</div><div class="answer-source">source: ${
      answer.source
    }</div>`;
  }

  onSelect(event) {
    this.nextPlace++;
    this.nextPlace %= 4;
    this.state = 'inactive';
    setTimeout(() => {
      this.state = 'active';
    }, 100);
    this.router.navigate(['/chat', this.selectedBot.index, event.index]);
  }

  share() {
    const url = 'http://www.veganbot.com' + this.router.url;
    let textArea = document.createElement('textarea');
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    this._notificationsService.success('Copied to clipboard', 'Paste the link anywhere');
    document.body.removeChild(textArea);
  }

  ngOnDestroy() {
    this.botSubscription.unsubscribe();
  }
}
