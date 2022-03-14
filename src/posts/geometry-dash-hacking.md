---
title: "How Geometry Dash hacks changed the game."
desc: The game used to be a simple standalone game, now it's a heavily customizable experience!
image: https://i.ytimg.com/vi/pJ7NAaX8pD4/maxresdefault.jpg
date: 2022-03-12
tags:
  - history
author: enzote
---

Geometry Dash, a game developped by Robert Topala, is a community driven game. A community driven game is a type of game that mainly stays alive due to an active community.

![All Time Peak](https://i.ibb.co/Tktn7X4/image.png)

These types of games usually have "Sub-Communities". Geometry Dash has these sub-communities, and one of them specializes into reverse-engineering, hacking and modding the game. This is the hacking community. These very smart people created whole frameworks to handle Geometry Dash modding, and boy do they have a lot of dedication to do such a thing.

## How Geometry Dash was made

Geometry Dash is a video game coded in C++, with the framework called [Cocos2d-x](https://www.cocos.com/en/cocos2dx). ![Logo](https://sonarlearning.co.uk/images/icons/courseIcons/cocos2d-x.png)

Because of the way that the game is [built and compiled](https://www.freecodecamp.org/news/c-compiler-explained-what-is-the-compiler-and-how-do-you-use-it/#:~:text=Compilers%20are%20utility%20programs%20that,code%20starting%20with%20a%20%23), the game is a .exe file meaning that it's raw binary and there is no way that a human can read and write to the file. This is what us programmers call a ["Standalone Application"](https://www.quora.com/What-is-a-standalone-application#:~:text=A%20standalone%20application%20is%20an%20application%20running%20locally%20on%20the%20computer).

## How hackers found a way modify the game

Hackers found a "Loophole" in the game. If they modify memory adresses from the app, they could change some functionalities of the game, _like No-Clip_. This hasn't much use cases though, as you can't create nor delete GUI or game parts by memory editing though. So in November 2014, the 1.9 update came out, and like that, the game was now on computers! Now that the game was on computers, hackers and modders could inject dll's into the game using modified game dll's and external libraries. This let modders and hackers create in game UI and game functionalities even faster and easier. This is also how the now extremely popular "Mega Hack V7" was created.

## How mods are made

**NOTE: this part is more on the technical side, so it is not needed to read this.**

To make a mod, you need four fundamental components. A coding environment (IDE, Text Editor, etc...), a compiler (LLVM & MSVC++ only), [Cocos Headers](https://github.com/HJFod/cocos-headers), [MinHook](https://github.com/HJFod/minhook), [GD.h](https://github.com/HJFod/gd.h). With these, you can do the basic setup with [this article](https://github.com/matcool/gd-mod-example/blob/master/Tutorial.md) by [Matcool](https://github.com/matcool).

{ .% alert % }
Note:
If you want to create your own Geometry Dash hack or mod fast, there is this awesome Git repository made by [Matcool](https://github.com/matcool), a fellow programmer _who also made the famous demon roulette_. It's super simple to setup with [VSCode](https://code.visualstudio.com/) and [MSVC++](https://aka.ms/vs/17/release/vc_redist.x86.exe)! Here is the link to this awesome [open source project](https://github.com/matcool/gd-mod-example)!
{ .% endalert % }

## Conclusion

The Geometry Dash community has come a long way, from a simple mobile game in 2013, to a heavily modifiable game with a rich and active community. I hope this article helped you understand how Geometry Dash hacking and modding worked. Now, you know how all these extensions and mods are made, and the work that was put to make these mods!

### Like I said in the "How mods are made" category, [this repository](https://github.com/matcool/gd-mod-example/blob/master/Tutorial.md) explains in way more detail how mods work, hooking etc...
