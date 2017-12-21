import { VeganBotPage } from './app.po';

describe('vegan-bot App', function() {
  let page: VeganBotPage;

  beforeEach(() => {
    page = new VeganBotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
