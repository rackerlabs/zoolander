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
npm install
npm test
```

## Build
 
```
grunt build
# Files saved to ./dist/[theme]
# by theme
grunt build:[theme]
# example
grunt build:derek
```

## Deploy

```
rsync -a docs/_site/ deploy@10.14.209.72:/usr/share/nginx/html/
```


