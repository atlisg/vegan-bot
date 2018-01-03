import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { SelectBotService } from "./select-bot/select-bot.service";
import { Bot } from "./models/bot.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  private botSubscription: Subscription;
  isOpen: boolean = false;
  isSelectBotOpen: boolean = false;
  selectedBot: Bot;
  bots: Array<Bot>;
  menuItems: Array<Object>;

  constructor(
    private router: Router,
    private selectBotService: SelectBotService
  ) {
    this.selectedBot = this.selectBotService.getCurrentBot();
    this.bots = this.selectBotService.bots;
    this.menuItems = [
      { route: "/about", value: "About" },
      { route: "/intro", value: "Help" }
    ];
  }

  ngOnInit() {
    this.botSubscription = this.selectBotService.bot.subscribe(b => {
      this.selectedBot = b;
    });
  }

  goToMain() {
    this.isOpen = false;
    this.router.navigate(["/chat", this.selectedBot.index]);
  }

  selectItem(item) {
    this.toggleMenu();
    this.router.navigate([item.route]);
  }

  selectBot(bot) {
    this.toggleBotMenu();
    this.selectedBot = bot;
    this.selectBotService.botChanged(bot);
    this.router.navigate(["/chat", this.selectedBot.index]);
  }

  isMobile() {
    return document.body.clientWidth <= 768;
  }

  toggleMenu() {
    this.isOpen = this.isMobile() ? !this.isOpen : false;
  }

  toggleBotMenu() {
    this.isSelectBotOpen = !this.isSelectBotOpen;
  }

  isBotSelected(bot) {
    return bot.index === this.selectedBot.index;
  }

  ngOnDestroy() {
    this.botSubscription.unsubscribe();
  }
}
