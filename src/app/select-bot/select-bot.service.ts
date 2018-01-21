import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Bot } from '../models/bot.interface';
import { VeganSidekickService } from '../answer-services/vegansidekick.service';
import { VeganNutritionistaService } from '../answer-services/vegannutritionista.service';
import { VeganComService } from '../answer-services/vegan.com.service';
import { VeganEasyService } from '../answer-services/veganeasy.service';
import { AntsService } from '../answer-services/ants.service';
import { AllTogetherService } from '../answer-services/alltogether.service';
import { VivaService } from '../answer-services/viva.service';

@Injectable()
export class SelectBotService {
  public bots: Array<Bot>;
  private botSource: BehaviorSubject<Bot>;
  public bot: any;

  constructor(
    private veganSidekickService: VeganSidekickService,
    private veganNutritionistaService: VeganNutritionistaService,
    private veganComService: VeganComService,
    private veganEasyService: VeganEasyService,
    private antsService: AntsService,
    private allTogetherService: AllTogetherService,
    private vivaService: VivaService
  ) {
    this.bots = [
      {
        title: 'All sources',
        index: 'all-sources',
        answerCount: this.allTogetherService.answers.length,
        serviceName: 'allTogetherService',
        homepage: 'http://veganbot.com',
      },
      {
        title: 'Vegan Sidekick',
        index: 'vegan-sidekick',
        answerCount: this.veganSidekickService.answers.length,
        serviceName: 'veganSidekickService',
        homepage: 'http://vegansidekick.com/',
      },
      {
        title: 'Vegan Nutritionista',
        index: 'vegan-nutritionista',
        answerCount: this.veganNutritionistaService.answers.length,
        serviceName: 'veganNutritionistaService',
        homepage: 'https://www.vegan-nutritionista.com/',
      },
      {
        title: 'Vegan.com',
        index: 'vegan-com',
        answerCount: this.veganComService.answers.length,
        serviceName: 'veganComService',
        homepage: 'https://www.vegan.com/',
      },
      {
        title: 'VeganEasy',
        index: 'vegan-easy',
        answerCount: this.veganEasyService.answers.length,
        serviceName: 'veganEasyService',
        homepage: 'https://www.veganeasy.org/',
      },
      {
        title: 'But you kill ants',
        index: 'ants',
        answerCount: this.antsService.answers.length,
        serviceName: 'antsService',
        homepage: 'http://www.veganaustralia.org.au/but_you_kill_ants',
      },
      {
        title: 'Viva',
        index: 'viva',
        answerCount: this.vivaService.answers.length,
        serviceName: 'vivaService',
        homepage: 'https://www.viva.org.uk/',
      },
    ];
    this.botSource = new BehaviorSubject(this.bots[0]);
    this.bot = this.botSource.asObservable();
  }

  public botChanged(value: Bot) {
    this.botSource.next(value);
  }

  public getCurrentBot() {
    return this.botSource.value;
  }

  public getBot(index: string) {
    return this.bots.find(bot => bot.index === index) || undefined;
  }
}
