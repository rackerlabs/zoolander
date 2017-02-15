#!/bin/bash

CONFIGOUT=./iconfont/build/config.scss
CONFIGIN=./iconfont/config.json

MAPOUT=./iconfont/build/map.scss
MAPIN=./iconfont/css/rswebfonts-codes.css

mkdir -p ./iconfont/build

echo -e "\$config: " > $CONFIGOUT
sed -e "s/\"//g" -e "s/{/(/" -e "s/}/)/" -e "s/\[/(/" -e "s/\]/)/" -e "/path/ d" < $CONFIGIN >> $CONFIGOUT
echo ";" >> $CONFIGOUT

echo -e "\$icons: ( " > $MAPOUT
sed -e "s/.icon-//" -e "s/before//" -e "s/{/(/" -e "s/}/),/" -e "s/\'/\"/g" -e "s/;//" -e "/charset/ d" < $MAPIN >> $MAPOUT
echo ");" >> $MAPOUT

npm run harp compile iconfont/build
mv ./iconfont/build/www/fonts.css ./styleguide/css/fonts.min.css
cp -R ./iconfont/font ./styleguide
