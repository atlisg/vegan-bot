# Project management

### Open

* Get rid of unused select-bot component
* Pick some default FAQ to display in dropdown on 0 letters in autocomplete?
* Ask sources for a public API with the answers so that we don't need to jsonify
* Update readme
* Implement stats (hits for each answer and each source)
* Add services:
  * animal-rights.com (https://www.animal-rights.com/faqfile.html)
  * some more
* Make app for iOS
* Make app for Android
* Implement "Not Found" page
* Make dark theme button
* Bot drawings for backgrounds
  * Meditating bot
  * The answers to everything
* Change python scripts to scrapers
  * Vegan Sidekick for links to other questions
  * But you kill ants for the formatting
  * Vegan Nutritionista for the links
  * VeganEasy for the links
  * Vegan.com for the links
  * Viva for the links
* Improve for devices
  * iPhone
  * Samsung
  * iPad
* Add favicon
* Address console warnings
  * Angular is running in the development mode. Call enableProdMode() to enable the production mode.
  * DevTools failed to parse SourceMap: http://veganbot.com/autotrack.js.map
* Make sources clickable in answers, linking to their homepage
* Improve searchbox
  * Order results in autocomplete
  * Make possible to enter in chat input without selecting from dropdown
  * Record all inputs in search field
* Implement Contact page
* Refactor and show hint with less opacity or smaller font or something.
* Use AND operator if multiple words, but OR if no results are found with AND

### In Progress

* API
  * Start using Node.js API and MongoDB to store and give answers
    * Make API searchable by parts of words, e.g. "pro" should return answers including "protein".
    * Refactor angular app to use the new API
  * Call API on every page change to track stats for each answer
    * Let API know that an answer was selected.
    * Let API know that an answer was shared.

### Done

* Start Project
* Menu and top bar
* Routing and navigation
* SelectBotService
* Intro page
* Select bot page
* Chat page
* Bot services

  1. Vegan Sidekick
  2. Vegan Nutritionista
  3. But you kill ants
  4. VeganEasy
  5. Vegan.com
  6. All together
  7. Viva

* Think about links in answers
* Combine all services in one
* Typewriter effect
* Combine bot services
* Rethink flow of app with regard to the combination of all the sources
* Revert the typewriter effect but keep the logic
* Placeholders
* Order autocomplete results
* Change routing so that a single answer can be shared with the link
* Add index to services
* Refactor python scripts into one
* Refactor jsonifyer.py
* Compare outputs between new and old scripts to make sure jsonifyer.py is not breaking anything
* Push to git repo
* Implement a "Share" button
* Update angular-cli to 1.6.2 or latest or something
* Fix vegansidekick service so that the trailing questions don't get shown
* Make it work for all screen sizes (not only mobile)
  * Top bar fixed position
  * Set max-width for app-content
  * Set max-width for buttons
  * Set max-width for notifications
  * Change burger into topbar on desktop
* Remove Source Code from menu
* Refactor Select Bot to a dropdown
* Fix select bot logic with regard to url params and subscriptions
* Click outside menu bar should close it
* Click outside select bot should close it
* Share button bug that Ægir found
* Make clickable areas bigger for select-bot, about, help, etc.
* About page
  * Remember to have the github repo link somewhere
* Intro page
* Change editor settings, e.g. `trailing-commas: true`
* Share on facebook and twitter and remove old share button
* Deploy to server
* Setup Google analytics
  * Track each path in the app
* Add hint to placeholders "... (hint: use keywords)"
* Change email on intro page to atlisaevar@gmail.com for now
