import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { SelectBotService } from './select-bot/select-bot.service';
import { Bot } from './models/bot.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class AppComponent implements OnInit, OnDestroy {
  private botSubscription: Subscription;
  isOpen: boolean = false;
  isSelectBotOpen: boolean = false;
  selectedBot: Bot;
  bots: Array<Bot>;
  menuItems: Array<Object>;

  constructor(private router: Router, private selectBotService: SelectBotService) {
    this.selectedBot = this.selectBotService.getCurrentBot();
    this.bots = this.selectBotService.bots;
    this.menuItems = [{ route: '/about', value: 'About' }, { route: '/intro', value: 'Help' }];
  }

  onClick(event) {
    const elem = event.target;
    // If user is not opening a sidemenu, we close them both.
    if (
      !elem.classList.contains('fa-bars') &&
      !elem.classList.contains('burger-icon') &&
      !elem.classList.contains('fa-chevron-right') &&
      !elem.classList.contains('bot-icon') &&
      !elem.classList.contains('big-bot-selector') &&
      !elem.classList.contains('subtitle') &&
      !(elem.parentElement && elem.parentElement.classList.contains('big-bot-selector'))
    ) {
      this.isSelectBotOpen = false;
      this.isOpen = false;
    }
  }

  ngOnInit() {
    this.botSubscription = this.selectBotService.bot.subscribe(b => {
      this.selectedBot = b;
    });
  }

  goToMain() {
    this.isOpen = false;
    this.router.navigate(['/chat', this.selectedBot.index]);
  }

  selectItem(item) {
    this.toggleMenu();
    this.router.navigate([item.route]);
  }

  selectBot(bot) {
    this.toggleBotMenu();
    this.selectedBot = bot;
    this.selectBotService.botChanged(bot);
    this.router.navigate(['/chat', this.selectedBot.index]);
  }

  isMobile() {
    return document.body.clientWidth <= 768;
  }

  toggleMenu() {
    this.isOpen = this.isMobile() ? !this.isOpen : false;
    if (this.isOpen) this.isSelectBotOpen = false;
  }

  toggleBotMenu() {
    this.isSelectBotOpen = !this.isSelectBotOpen;
    if (this.isSelectBotOpen) this.isOpen = false;
  }

  isBotSelected(bot) {
    return bot.index === this.selectedBot.index;
  }

  ngOnDestroy() {
    this.botSubscription.unsubscribe();
  }
}
