[![Publish](https://github.com/lukeswitz/nerdle/actions/workflows/publish.yml/badge.svg)](https://github.com/lukeswitz/nerdle/actions/workflows/publish.yml)
<img src="https://img.shields.io/github/package-json/v/lukeswitz/nerdle" alt="GitHub package.json version" />

**A Six-Letter Word 🧩 Game**

- Private: No logging or data collected on this end, game data is stored in the browser.    
- Adaptive: Open an issue to add/remove words and with any other suggestions or bugs. 
 
### Nerdle Features

- Words are chosen from the list of words at random instead of in sequence, and the solution is not stored in localStorage, making it harder to cheat.
- When you complete a game the definition of the word is shown on the end of game modal.
- In addition to the other statistics, your average guesses and your losses are also displayed.
- When the timer reaches 0 for a given game mode it changes into a refresh button instead of staying at 00:00:00.
- When the timer reaches 0 for a given game mode a refresh button appears in the top left corner.
- A tips widget in the settings menu with useful information about the functionality of the game.
- Right clicking/double tapping a submitted word on the board will tell you its definition.
- Right clicking/double tapping a submitted word on the board will tell you how many possible words could have been played there, taking all previous information into account.
- Right clicking/double tapping the row below the last submitted word will tell you how many possibilities there are taking all previous information into account.
- The game mode is reflected in the url, allowing you to share a game mode directly.
- Service worker which allows the game to be easily downloaded as a progressive web app and run offline. 

## Additional modes
**Hourly mode**: A new word every hour.

**Infinite mode**: A new word every time you refresh, for the true addicts.

##### Credit to @MikhaD for the original repository, thank you.

