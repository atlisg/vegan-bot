import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { SelectBotService } from '../select-bot/select-bot.service';
import { ThemeService } from '../theme/theme.service';
import { Bot } from '../models/bot.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  bots: Array<Bot> = [];
  private isDarkSubscription: Subscription;
  isDark: boolean;

  constructor(private selectBotService: SelectBotService, private themeService: ThemeService) {
    this.selectBotService.bots.forEach(bot => {
      if (bot.id) this.bots.push(bot);
    });
  }

  ngOnInit() {
    this.isDarkSubscription = this.themeService.isDark.subscribe(d => {
      this.isDark = d;
    });
  }

  getTotalAnswerCount() {
    let count = 0;
    this.bots.map(bot => (count += bot.answerCount));
    return count;
  }
}
