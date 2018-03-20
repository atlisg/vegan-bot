import { Component, OnInit, ElementRef, Pipe, PipeTransform } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { HttpModule } from '@angular/http';
import { Subscription } from 'rxjs/Rx';
import { AnswerService } from '../answer-services/answer.service';
import { Bot } from '../models/bot.interface';
import { Answer } from '../models/answer.interface';
import { SelectBotService } from '../select-bot/select-bot.service';
import { ThemeService } from '../theme/theme.service';
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
  private isDarkSubscription: Subscription;
  isDark: boolean;
  selectedBot: Bot;
  selectedAnswer: Answer;
  state: string = 'inactive';
  placeholders: Array<string>;
  nextPlace: number;

  constructor(
    private selectBotService: SelectBotService,
    private answerService: AnswerService,
    private router: Router,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.botSubscription = this.selectBotService.bot.subscribe(b => {
      this.selectedBot = b;
    });
    this.isDarkSubscription = this.themeService.isDark.subscribe(d => {
      this.isDark = d;
    });

    const url = this.router.url.split('/');
    if (url.length > 2) {
      const answerId = url[2];
      this.getAnswerById(answerId);
    }
    const isTooSmall = document.body.clientWidth < 440;
    const hint = isTooSmall ? '' : '(hint: use keywords)';
    this.placeholders = [
      `Give me input. ${hint}`,
      `Enter characters. ${hint}`,
      `Feed me. ${hint}`,
      `I eat your words. ${hint}`,
    ];
    this.nextPlace = Math.floor(Math.random() * 4);
  }

  getAnswerById(id) {
    this.answerService.getAnswerById(id).subscribe(answer => {
      this.selectedAnswer = answer;
      this.triggerNewAnswerDisplay();
      this.answerService.updateAnswerById(id, true, false).subscribe(updated => {});
    });
  }

  getAnswers(keyword) {
    return this.answerService.getAnswers(this.selectedBot.id, keyword);
  }

  formatAnswer(answer) {
    return '';
  }

  formatList(answer) {
    return `<div class="answer-key">${
      answer.key
    }</div><div class="answer-source" [ngClass]="{'dark-theme': isDark}">source: ${
      answer.source.name
    }</div>`;
  }

  triggerNewAnswerDisplay() {
    this.state = 'inactive';
    setTimeout(() => {
      this.state = 'active';
    }, 100);
  }

  onSelect(event) {
    if (event.id) {
      this.nextPlace++;
      this.nextPlace %= 4;
      this.triggerNewAnswerDisplay();
      if (this.router.url.split('/').length > 2) {
        this.answerService.updateAnswerById(event.id, true, false).subscribe(updated => {});
      }
      this.router.navigate(['/chat', event.id]);
    }
  }

  share() {
    this.answerService
      .updateAnswerById(this.selectedAnswer.id, false, true)
      .subscribe(updated => {});
  }

  ngOnDestroy() {
    this.botSubscription.unsubscribe();
  }
}
