@echo off
@title bat execute git auto commit
C:
cd C:/jsdev/react-tailwind
git add .
git commit -m "React tailwind app"
git push -u origin main