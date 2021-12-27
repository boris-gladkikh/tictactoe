# Tic-Tac-Toe

## Description

Tic-Tac-Toe game created for Yummly, with React and hooks.

Bootstrapped using Create-React-App v5.0.0

Run npm-start on local environment to launch app

Note: I would regularly place each component into its own folder and include the css file there as well, (or write inline CSS)
but due to only having 5 custom components, I included them in the src folder and placed all CSS into the App.css file.

## Main components:

- Game

  - all logic and state management occurs in this parent component.

- GameBoard

  - generates gameboard and winner modal, with child game tile components.

- GameTile

  - triggers game logic on click

- TitleScreen

  - initial screen presented to players

- Winner Modal

  - shows name of winner upon completion of game.

- utilities.js
  - contains util function to calculate winner. Since with a 3 by 3 board you can
    only have a total of 9 moves between two players, the basic calculate winner
    function is used, that checks for all 8 possible winning possibilities. Time
    complexity is linear and efficient, since the number of tiles doesn't change,
    and neither does the number of possible winning combinations.
