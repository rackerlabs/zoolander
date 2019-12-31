# Zoolander

Derek Zoolander's Corporate Style Guide to Help Product Teams Build Ridiculously Good Looking Websites

## Contributing

These instructions are not exhaustive but here is the gist. (Assumptions: you are running tests and verifying your
changes in multiple browsers.)

* Fork Zoolander
* Clone your repo
* Create a branch in your repo
* Make your changes
* Commit your changes
* Push branch to your repo
* Create PR from your repo:`branch` to Zoolander:`master`

## Requirements

Node.js 8-13

## Getting Started (Step by Step)

```
npm install
npm start
```

## Versioning

Use the following command to bump current version

```
npm version major | minor | patch
```

For more information on versioning, see http://semver.org/

## Deploy

Run the following command to deploy to [github pages!](https://rackerlabs.github.io/zoolander):

```
npm run gh-pages
```

## Linting

Use the following command to manually lint zoolander Javascript and Sass.

```
npm run lint:js
npm run lint:sass
```

## ES6 JS

Use the following command to manually transpile Zoolander JS

```shell
npm run babel

#to watch js files
npm run babel:watch
```

## Adding New Icons

We are using [Fontello](http://fontello.com/) to manage our custom icon set. To add new icons you will need to follow these steps:

1. Take the config.json file located in ```fonts/config.json``` and drag it onto the fontello webpage. This will import all of our existing icons. Fontello also caches the last import you did so this step may not always be necessary.

2. Pick the new icons/icon you want by clicking them and then download the new zip file using the red download button at the top of the page.

3. Open the zip file and replace all of the local zoolander files in the ```fonts/``` folder with all of the new ones in the zip.

4. Find the new line added to the ```fonts/css/rswebfonts.css``` file for your new icon/icons. It should look something like this:
```css
.icon-yournewicon:before { content: '\e851'; }
```
Copy the line/lines and append them to the ```styleguide/_themes/global/scss/rsweb-font-style.scss``` file but you will need to strip out the ```icon-``` prefix. It should now look something like this:
```css
.yournewicon:before { content: '\e851'; }
```

5. Next, you will need to copy all of the actual font files located in the ```fonts/font/``` folder and paste them into the ```styleguide/font/``` folder, replacing the old ones.

6. Finally, bump the new font version in ```styleguide/_themes/global/scss/rsweb-font-style.scss``` at the top of the file.

Your new icon/icons should now be ready for use using the new classes like this:
```html
<span class="rsweb yournewicon"></span>
```

Or you can access them using css/scss like so:
```scss
.some-class {

  &:before {
    content: '\e851';
    font-family: 'rswebfonts';
  }
}
```
