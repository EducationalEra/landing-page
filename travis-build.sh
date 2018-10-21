#!/bin/bash

npm install
npm run build

# Generate the redirects.
while read i
do
from=`echo $i | awk '{print $1}'`
to=`echo $i | awk '{print $2}'`
mkdir -p build/$from
cat << EOT > build$from/index.html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Refresh" content="0;url=$to">
</head>
</html>
EOT
done < redirects.txt

# Create an error.html page.
cat << EOT > build/error.html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Refresh" content="0;url=https://www.ed-era.com/">
</head>
</html>
EOT

# Copy non index.html files to their designated folder.
find build -name "*.html" | grep -v "/index.html" | while read i; do mkdir -p "${i/.html/}"; cp "$i" "${i/.html/}/index.html";done

# Zip content.
find build -type f -name "*.html" -exec gzip -n -9 {} \;
find build -type f -name "*.js" -exec gzip -n -9 {} \;
find build -type f -name "*.css" -exec gzip -n -9 {} \;
find build -type f -name "*.json" -exec gzip -n -9 {} \;

# Remove the extension.
find build -name '*.gz' -type f | while read NAME ; do mv "${NAME}" "${NAME%.gz}" ; done

