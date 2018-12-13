# /bin/bash

# abort on errors
set -e

# add fonts
cp -rf node_modules/mozilla-fira-pack/Fira styleguide/font/

# add scroll reveal
cp node_modules/scrollreveal/dist/scrollreveal.min.js styleguide/global/plugins/scrollreveal.min.js