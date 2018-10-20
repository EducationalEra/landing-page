#!/bin/bash

npm install
npm run build

IFS=$'\n'
find build -type f -name "*.html" -exec gzip -n -9 {} \;
find build -type f -name "*.js" -exec gzip -n -9 {} \;
find build -type f -name "*.css" -exec gzip -n -9 {} \;
find build -type f -name "*.json" -exec gzip -n -9 {} \;

#remove the .gz extension
for i in `find build | egrep "\.(html|js|css|json)\.gz$"`; do
   mv "$i" "${i%.*}"
done