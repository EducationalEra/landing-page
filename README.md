# How-to

## Install project on local machine 🛠

Install all dependencies
 > sh install.sh

Build a project
 > npm run build

Run project
 > npx gulp

Project should automatically start at http://localhost:3000

<!-- это еще под большим вопросом -->
For watching files in runtime open the console in other tab and run:
  > node_modules/gulp/bin/gulp.js watch

<!-- тут тоже непонятно: актуально или нет -->
Now all .jade and .less files are being watched and compiled in realtime.

NOTE: do not edit HTML files, they will be overriden the next time you compile. All template assets are in the templates directory.

## Commit changes 🔨

If your update is tiny and can't broke anything → commit to preproduction branch.
If you worked on new feature, create separate branch and push your code into it.
Lead you can direct requests to: @chudaol

