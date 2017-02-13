if [ -d '.git' ];
  then cp ./hooks .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit;
fi

mkdir ./styleguide/font
cp ./node_modules/rswebfont/font/* ./styleguide/font
cp ./node_modules/rswebfont/dist/fonts.min.css ./styleguide/css
