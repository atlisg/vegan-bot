import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Bot } from '../models/bot.interface';
import { AnswerService } from '../answer-services/answer.service';

@Injectable()
export class SelectBotService {
  public bots: Array<Bot>;
  private botSource: BehaviorSubject<Bot>;
  public bot: any;

  constructor(answerService: AnswerService) {
    this.bots = [
      {
        title: 'All sources',
        id: undefined,
        answerCount: 0,
        homepage: 'http://veganbot.com',
      },
      {
        title: 'Vegan Sidekick',
        id: 'vsid',
        answerCount: 0,
        homepage: 'http://vegansidekick.com/',
      },
      {
        title: 'Vegan Nutritionista',
        id: 'vnut',
        answerCount: 0,
        homepage: 'https://www.vegan-nutritionista.com/',
      },
      {
        title: 'Vegan.com',
        id: 'vcom',
        answerCount: 0,
        homepage: 'https://www.vegan.com/',
      },
      {
        title: 'VeganEasy',
        id: 'veas',
        answerCount: 0,
        homepage: 'https://www.veganeasy.org/',
      },
      {
        title: 'But you kill ants',
        id: 'byka',
        answerCount: 0,
        homepage: 'http://www.veganaustralia.org.au/but_you_kill_ants',
      },
      {
        title: 'Viva',
        id: 'viva',
        answerCount: 0,
        homepage: 'https://www.viva.org.uk/',
      },
    ];
    this.botSource = new BehaviorSubject(this.bots[0]);
    this.bot = this.botSource.asObservable();
    this.bots.map(bot => {
      answerService.getAnswers(bot.id).subscribe(answers => {
        bot.answerCount = answers.length;
      });
    });
  }

  public botChanged(value: Bot) {
    this.botSource.next(value);
  }

  public getCurrentBot() {
    return this.botSource.value;
  }

  public getBot(id: string) {
    return this.bots.find(bot => bot.id === id) || undefined;
  }
}
