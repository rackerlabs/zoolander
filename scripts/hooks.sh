if [ -d '.git' ];
  then cp ./hooks .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit;
fi