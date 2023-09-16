---
title: Othello
date: 2021/12/18
description: Othello board game with complex logic and 3 AI opponent difficulties.
tag: Java
author: Gordan Milovac
---

# Othello

This project is a final project for CS0150: Introduction to Object-Oriented Programming and Computer Science in Fall of 2021 at Brown University. I have built the game in Java. 

![Start](/images/othellostart.png)

---

### Project Details

This project is a code implementation of the "Othello" game. Players can choose to play against other players or AI opponents with varying difficulty levels. The game features an 8x8 game board with initial pieces placed in the middle. Players take turns making moves, and the goal is to have more pieces on the board than your opponent. The game logic is handled by separate classes for human and computer players, and there's a referee class responsible for managing the game's flow, score, and declaring the winner. The game can be reset without quitting.

---

![Game](/images/othellomid.png)

----

### Design Choices

The project utilizes an interface named "Player" to allow the same methods to be called on both "ComputerPlayer" and "HumanPlayer" classes, despite their different implementations. It also uses a recursive algorithm to find the best possible move based on analyzing the value of the imaginary board.

----

![End](/images/othelloend.png)

----

### Team members and contributions

**Gordan Milovac** (*gmilovac*) Responsible for the whole project

**Time allocated:** 40+ hours

### Errors / bugs

There are small issues with Computer level 2 and 3. They are showcasing inconsistent behaviour.

----

![Video](/images/othellovid.gif)