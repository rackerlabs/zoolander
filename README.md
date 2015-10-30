# Zoolander

Derek Zoolander's Corporate Style Guide to Help Product Teams Build Ridiculously Good Looking Websites


## Requirements

* NodeJS
* NPM
* Ruby
* Grunt
* Sass

## Install

```
gem install bundler jekyll
npm install
```

## Build

```
npm run build
# Files saved to ./dist/[theme]

# by theme
grunt build:[theme]
# example
grunt build:derek
```

## Docs

```
npm run server
```

Visit http://127.0.0.1:4000/

## Deploy

```
rsync -a docs/_site/ deploy@10.14.209.72:/usr/share/nginx/html/
```
