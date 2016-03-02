#!/bin/bash

sed -i '' -E 's/base":.*/base": "\/zoolander\/"/' docs/_harp.json
npm run compile
git checkout -- docs/_harp.json
git branch -D gh-pages

git checkout --orphan gh-pages
git rm -rf .
mv site/* ./
rm -r site

git checkout master -- dist
echo -e "node_modules\nbower_components" > .gitignore
git add .gitignore
git add .
git commit -m 'Github Pages'
git push upstream gh-pages -f
git checkout master

