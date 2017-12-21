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
  selectedBot: Bot;

  constructor(
    private router: Router,
    private selectBotService: SelectBotService
  ) {
    this.selectedBot = this.selectBotService.getCurrentBot();
  }

  menuItems = [
    { route: "/select-bot", value: "Select Bot" },
    { route: "/about", value: "About" },
    { route: "/intro", value: "Help" },
    { route: "external", value: "Source Code" }
  ];

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
    if (item.route !== "external") {
      this.toggleMenu();
      this.router.navigate([item.route]);
    } else {
      console.log("Link to GitHub repo.");
    }
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  ngOnDestroy() {
    this.botSubscription.unsubscribe();
  }
}
