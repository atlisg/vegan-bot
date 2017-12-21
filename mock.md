# Components

### App

- Menubar with title and subtitle
- Burger icon
- Menu with items
    - Select Bot
    - About
    - Help (back to Intro)
    - Source Code (link to GitHub repo)

### Intro

- Intro text and instructions
- Begin button

### Chat

- Input box with autocomplete
- Answer from Bot
- Share button
- Copy answer button

### Select Bot

- List of available Bots
- On select: back to chat

### About

- Some text about VeganBot
- Contact info
- Back to chat button?


# Routes

- http://veganbot.com/intro                      <------ Default if new user
- http://veganbot.com/chat/{bot}                 <------ Default
- http://veganbot.com/chat/{bot}/{answer}
- http://veganbot.com/select-bot
- http://veganbot.com/about


# Services

One service for each bot