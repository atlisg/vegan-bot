import { Component, OnInit } from '@angular/core';
import { SelectBotService } from '../select-bot/select-bot.service';
import { Bot } from '../models/bot.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  bots: Array<Bot> = [];

  constructor(private selectBotService: SelectBotService) {
    this.selectBotService.bots.forEach(bot => {
      if (bot.index !== 'all-sources') {
        this.bots.push(bot);
      }
    });
  }

  ngOnInit() {}
}
