import {
  Component,
  OnInit,
  ElementRef,
  Pipe,
  PipeTransform
} from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { NotificationsService } from "angular2-notifications";
import { VeganSidekickService } from "../answer-services/vegansidekick.service";
import { VeganNutritionistaService } from "../answer-services/vegannutritionista.service";
import { VeganComService } from "../answer-services/vegan.com.service";
import { VeganEasyService } from "../answer-services/veganeasy.service";
import { AntsService } from "../answer-services/ants.service";
import { AllTogetherService } from "../answer-services/alltogether.service";
import { VivaService } from "../answer-services/viva.service";
import { Bot } from "../models/bot.interface";
import { Answer } from "../models/answer.interface";
import { SelectBotService } from "../select-bot/select-bot.service";

const triggerOptions = delay => {
  return [
    state(
      "inactive",
      style({
        opacity: 0
      })
    ),
    state(
      "active",
      style({
        opacity: 1
      })
    ),
    transition("inactive => active", animate(`500ms ${delay}ms ease-in`))
  ];
};

@Pipe({ name: "safeHtml" })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    console.log(this.sanitized.bypassSecurityTrustHtml(value));
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"],
  animations: [
    trigger("yourInputHeaderState", triggerOptions(0)),
    trigger("yourInputState", triggerOptions(400)),
    trigger("botAnswerHeaderState", triggerOptions(800)),
    trigger("botAnswerState", triggerOptions(1200)),
    trigger("shareButtonState", triggerOptions(2000))
  ]
})
export class ChatComponent implements OnInit {
  selectedBot: Bot;
  selectedAnswer: Answer;
  writer: Array<string>;
  answers: Array<Answer>;
  state: string = "inactive";
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
    this.writer = [""];
    this.placeholders = [
      "Lets talk",
      "Chat with me",
      "Fire away",
      "What's up?"
    ];
    this.nextPlace = 0;
    this.selectedBot = this.selectBotService.getCurrentBot();
    this.answers = this[this.selectedBot.serviceName]
      ? this[this.selectedBot.serviceName].answers
      : [];
    this.options = {
      timeOut: 5000,
      maxStack: 1
    };
  }

  ngOnInit() {
    const url = this.router.url.split("/");
    if (url.length > 3) {
      this.selectedAnswer = this.answers.find(value => value.index === url[3]);
    }
  }

  write() {
    for (let x of this.selectedAnswer.answer) {
      this.writer.push("");
    }
    let i = 0;
    let p = 0;

    const scrollDown = () => {
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: "smooth"
      });
      /* console.log("scrolling");
      console.log("p: " + p);
      console.log("this.writer[p]: " + this.writer[p]);
      console.log(
        "this.selectedAnswer.answer[p]: " + this.selectedAnswer.answer[p]
      ); */
      if (p === this.selectedAnswer.answer.length) return;
      setTimeout(scrollDown, 2500);
    };

    let hasBegun = false;
    const typewriterEffect = () => {
      if (
        window.document.getElementById("body").clientHeight >
          window.innerHeight &&
        !hasBegun
      ) {
        /* console.log("starting scroll"); */
        setTimeout(scrollDown, 10);
        hasBegun = true;
      }
      if (p < this.selectedAnswer.answer.length) {
        if (i < this.selectedAnswer.answer[p].length) {
          this.writer[p] += this.selectedAnswer.answer[p][i];
          i++;
          setTimeout(typewriterEffect, 20);
        } else {
          p++;
          i = 0;
          setTimeout(typewriterEffect, 500);
        }
      }
    };

    setTimeout(typewriterEffect, 20);
  }

  formatAnswer(answer) {
    return "";
  }

  formatList(answer) {
    /* return `${answer.key} </br> ${answer.source}`; */
    return `<div class="answer-key">${
      answer.key
    }</div><div class="answer-source">source: ${answer.source}</div>`;
  }

  onSelect(event) {
    this.nextPlace++;
    this.nextPlace %= 4;
    this.state = "inactive";
    setTimeout(() => {
      this.state = "active";
    }, 100);
    this.router.navigate(["/chat", this.selectedBot.index, event.index]);
  }

  share() {
    const url = "http://www.veganbot.com" + this.router.url;
    let textArea = document.createElement("textarea");
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    this._notificationsService.success(
      "Copied to clipboard",
      "Paste the link anywhere"
    );
    document.body.removeChild(textArea);
  }
}
