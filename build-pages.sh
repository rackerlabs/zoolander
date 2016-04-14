#!/bin/bash

git branch -D gh-pages
git checkout --orphan gh-pages
cp -R dist zoolander
ls | grep -v -E "(zoolander|node_modules)" | xargs git rm -rf
echo -e "node_modules" > .gitignore
git add .gitignore
git add .
git commit -m 'Github Pages'
git push upstream gh-pages -f
git checkout master
