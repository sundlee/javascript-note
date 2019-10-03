@echo off

:: build
npm run build

:: navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy with vuepress'

git push -f https://github.com/sundlee/javascript-note.git master:gh-pages

cd -