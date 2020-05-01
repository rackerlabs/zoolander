# /bin/bash

# abort on errors
set -e

# Remove jquery if it already exists.
if [ -d dist/js/jquery ]; then
  rm -Rf dist/js/jquery
fi

# Install jquery in dist directory.
cp -Rf node_modules/jquery/dist dist/js/jquery
