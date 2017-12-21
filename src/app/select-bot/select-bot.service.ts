import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs/Rx";
import { Bot } from "../models/bot.interface";
import { VeganSidekickService } from "../answer-services/vegansidekick.service";
import { VeganNutritionistaService } from "../answer-services/vegannutritionista.service";
import { VeganComService } from "../answer-services/vegan.com.service";
import { VeganEasyService } from "../answer-services/veganeasy.service";
import { AntsService } from "../answer-services/ants.service";
import { AllTogetherService } from "../answer-services/alltogether.service";
import { VivaService } from "../answer-services/viva.service";

@Injectable()
export class SelectBotService {
  constructor(
    private veganSidekickService: VeganSidekickService,
    private veganNutritionistaService: VeganNutritionistaService,
    private veganComService: VeganComService,
    private veganEasyService: VeganEasyService,
    private antsService: AntsService,
    private allTogetherService: AllTogetherService,
    private vivaService: VivaService
  ) {}

  public bots: Array<Bot> = [
    {
      title: "All sources",
      index: "all-sources",
      answerCount: this.allTogetherService.answers.length,
      serviceName: "allTogetherService"
    },
    {
      title: "Vegan Sidekick",
      index: "vegan-sidekick",
      answerCount: this.veganSidekickService.answers.length,
      serviceName: "veganSidekickService"
    },
    {
      title: "Vegan Nutritionista",
      index: "vegan-nutritionista",
      answerCount: this.veganNutritionistaService.answers.length,
      serviceName: "veganNutritionistaService"
    },
    {
      title: "Vegan.com",
      index: "vegan-com",
      answerCount: this.veganComService.answers.length,
      serviceName: "veganComService"
    },
    {
      title: "VeganEasy",
      index: "vegan-easy",
      answerCount: this.veganEasyService.answers.length,
      serviceName: "veganEasyService"
    },
    {
      title: "But you kill ants",
      index: "ants",
      answerCount: this.antsService.answers.length,
      serviceName: "antsService"
    },
    {
      title: "Viva",
      index: "viva",
      answerCount: this.vivaService.answers.length,
      serviceName: "vivaService"
    }
  ];
  private botSource: BehaviorSubject<Bot> = new BehaviorSubject(this.bots[0]);
  public bot = this.botSource.asObservable();

  public botChanged(value: Bot) {
    this.botSource.next(value);
  }

  public getCurrentBot() {
    return this.botSource.value;
  }
}
