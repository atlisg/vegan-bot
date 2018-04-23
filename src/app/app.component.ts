import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { SelectBotService } from './select-bot/select-bot.service';
import { ThemeService } from './theme/theme.service';
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
  private isDarkSubscription: Subscription;
  isOpen: boolean = false;
  isSelectBotOpen: boolean = false;
  selectedBot: Bot;
  bots: Array<Bot>;
  menuItems: Array<Object>;
  isDark: boolean;
  isBrowser: boolean;

  constructor(
    private router: Router,
    private selectBotService: SelectBotService,
    private themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.selectedBot = this.selectBotService.getCurrentBot();
    this.bots = this.selectBotService.bots;
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.botSubscription = this.selectBotService.bot.subscribe(b => {
      this.selectedBot = b;
    });
    this.isDarkSubscription = this.themeService.isDark.subscribe(d => {
      this.isDark = d;
    });
    this.menuItems = [
      { route: '/contact', value: 'Contact' },
      { route: '/about', value: 'About' },
      { route: '/intro', value: 'Help' },
      { value: this.isDark ? 'Brighten' : 'Darken' },
    ];
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

  goToMain() {
    this.isOpen = false;
    this.router.navigate(['/chat']);
  }

  selectItem(item) {
    this.toggleMenu();
    if (item.route) {
      this.router.navigate([item.route]);
    } else {
      this.toggleTheme();
    }
  }

  toggleTheme() {
    this.themeService.themeChanged(!this.isDark);
    this.menuItems[3]['value'] = this.isDark ? 'Brighten' : 'Darken';
  }

  selectBot(bot) {
    this.toggleBotMenu();
    this.selectedBot = bot;
    this.selectBotService.botChanged(bot);
    this.router.navigate(['/chat']);
  }

  isMobile() {
    return this.isBrowser ? document.body.clientWidth <= 1000 : true;
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
    return bot.id === this.selectedBot.id;
  }

  ngOnDestroy() {
    this.botSubscription.unsubscribe();
  }
}
