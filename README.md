# HSNB Interactive Storytelling Test #

Hello, storyteller!

Here's a quick task similar to what we often do in the Storytelling pages.
You have a three-panel navigation, similar to this:
https://www.highsnobiety.com/p/ralph-lauren-sports-history/

Your task will be to create an animation between the three panels, as it doesn't have to look or work like the example - do your own thing! The only requirement is that the panels are stacked in columns on desktop and rows on mobile.

To speed things up, we've prepared a simple setup with a task runner to help you get started. You can of course use your own instead.

## Getting Started ##

Clone & install dependencies, Grunt & SASS:
```
$ npm install
$ npm install -g grunt-cli
$ gem install sass --pre
```

Run default task:
```
$ grunt
```

The task inits the dist/ folder and sets watchers on the build/ files script.js, styles.scss, index.html.
Access the page via dist/index.html.

## Dos and Dont's ##

You don't have to:
- bother with switching content under each panel. Just do the navigation;
- use the markup / styles we provided. If you want to do it differently, go for it;
- use the libraries in package.json. If you prefer other tools, go for it.

You have to:
- animate the transition between panels (ideally on hover and click);
- provide a button or something that restores the panels to their original state;
- cool, but not mandatory: illustrate the transition between panels 1 and 3;
- bonus: make it flawless cross-browser.

Feel free to:
- ask questions
- use google (but if you copy and paste something please demonstrate that you know what it does)

Have fun!
