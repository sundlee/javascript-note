@echo off

:: build
npm run build

:: navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy with vuepress'

git push -f http://git.korea.ncsoft.corp/scm/~sundlee/javascript-note.git master:gh-pages

cd -