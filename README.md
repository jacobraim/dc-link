# DC Link prototype

A static Washingtonian-style daily grouping game. No installation or build process is required.

## Run locally

Open `index.html` in a browser, or serve the folder with any static web server.

## Add a daily puzzle

Open `puzzles.js` and add another dated entry to `DC_LINK_PUZZLES`:

```js
'2026-07-29': {
  number: 2,
  groups: [
    {
      id: 'green',
      label: 'Easy category',
      color: 'green',
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4']
    },
    // yellow, blue, and purple groups follow
  ]
}
```

Difficulty order is green, yellow, blue, purple. Each puzzle must contain four groups of four uniquely worded items.

The game rolls over at 6:00 AM Eastern Time. If the current day's puzzle is missing, it displays the most recent available puzzle rather than failing.

## Deploy

Upload all files to the root of a GitHub repository and connect that repository to Vercel. No framework, build command, or output directory is needed.
