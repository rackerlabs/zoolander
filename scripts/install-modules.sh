# /bin/bash

# abort on errors
set -e

# add fonts
if [ ! -d ./node_modules/mozilla-fira-pack ]; then
  npm install --save mozilla-fira-pack
fi

cp -rf ./node_modules/mozilla-fira-pack/Fira styleguide/font/

# add scroll reveal
if [ ! -d ./node_modules/scrollreveal ]; then
  npm install --save scrollreveal
fi

cp ./node_modules/scrollreveal/dist/scrollreveal.min.js styleguide/global/plugins/scrollreveal.min.js

# add karma mocha
if [ ! -d ./node_modules/karma-mocha ]; then
  npm install --save karma-mocha
fi

cd ./node_modules/karma-mocha
npm install
npx grunt build

