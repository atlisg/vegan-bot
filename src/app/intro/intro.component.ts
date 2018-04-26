import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { SelectBotService } from '../select-bot/select-bot.service';
import { ThemeService } from '../theme/theme.service';
import { MetaService } from '../meta/meta.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  private isDarkSubscription: Subscription;
  isDark: boolean;

  constructor(
    private router: Router,
    private selectBotService: SelectBotService,
    private themeService: ThemeService,
    private metaService: MetaService
  ) {}

  ngOnInit() {
    this.isDarkSubscription = this.themeService.isDark.subscribe(d => {
      this.isDark = d;
    });
    this.metaService.updateMetaTitleAndDescription();
  }

  startChatting() {
    this.router.navigate(['/chat']);
  }
}
