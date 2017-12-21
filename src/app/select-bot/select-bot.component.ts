import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { SelectBotService } from "./select-bot.service";
import { Bot } from "../models/bot.interface";

@Component({
  selector: "app-select-bot",
  templateUrl: "./select-bot.component.html",
  styleUrls: ["./select-bot.component.scss"]
})
export class SelectBotComponent implements OnInit {
  bots = this.selectBotService.bots;
  selectedBot: Bot;

  constructor(
    private router: Router,
    private selectBotService: SelectBotService
  ) {
    this.selectedBot = this.selectBotService.getCurrentBot();
  }

  ngOnInit() {}

  selectBot(bot) {
    this.selectedBot = bot;
    this.selectBotService.botChanged(bot);
    this.router.navigate(["/chat", this.selectedBot.index]);
  }

  isBotSelected(bot) {
    return bot.index === this.selectedBot.index;
  }
}
