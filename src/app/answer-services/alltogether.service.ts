import { Injectable } from "@angular/core";
import { Answer } from "../models/answer.interface";
import { VeganSidekickService } from "./vegansidekick.service";
import { VeganNutritionistaService } from "./vegannutritionista.service";
import { VeganComService } from "./vegan.com.service";
import { VeganEasyService } from "./veganeasy.service";
import { AntsService } from "./ants.service";
import { VivaService } from "./viva.service";

@Injectable()
export class AllTogetherService {
  constructor(
    private veganSidekickService: VeganSidekickService,
    private veganNutritionistaService: VeganNutritionistaService,
    private veganComService: VeganComService,
    private veganEasyService: VeganEasyService,
    private antsService: AntsService,
    private vivaService: VivaService
  ) {}

  public answers: Array<Answer> = this.veganSidekickService.answers
    .concat(this.veganNutritionistaService.answers)
    .concat(this.veganComService.answers)
    .concat(this.veganEasyService.answers)
    .concat(this.antsService.answers)
    .concat(this.vivaService.answers);
  /* .sort((a, b) => Math.random() - Math.random()) */
}
