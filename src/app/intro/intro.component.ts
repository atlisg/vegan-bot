import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectBotService } from '../select-bot/select-bot.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  constructor(private router: Router, private selectBotService: SelectBotService) {}

  ngOnInit() {}

  startChatting() {
    this.router.navigate(['/chat', this.selectBotService.getCurrentBot().index]);
  }
}
