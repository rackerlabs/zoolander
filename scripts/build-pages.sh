#!/bin/bash

git branch -D gh-pages
git checkout --orphan gh-pages

# Change Base
sed -i '' -E 's/base":.*/base": "\/zoolander\/",/' styleguide/_harp.json
npm run harp:compile

ls | grep -v -E "(dist|node_modules)" | xargs rm -rf
mv dist/* ./
rm -r dist
echo -e "node_modules" > .gitignore
git add .gitignore
git add .
git commit -n -m 'Github Pages'
git push upstream gh-pages -f
git checkout 2.0.x 
