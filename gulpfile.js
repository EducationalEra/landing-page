var gulp = require('gulp');
var less = require('gulp-less');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var cachebust = require('gulp-cache-bust');
var rename = require("gulp-rename");
var watch = require('gulp-watch');
var fs = require('fs');
var gulpSequence = require('gulp-sequence');
var _ = require('underscore');
var browserSync = require('browser-sync').create();

var books = ["ukrainian", "physics", "maths", "biology", "english", "geography", "history", "law", "english2", "anticorruption-lesson"];

var lessons = ["1", "2"];

gulp.task('default', ['copy']);

gulp.task("sass", function () {
  return gulp.src('css/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('build/css'));
});

gulp.task('less', function () {
  var less = require('gulp-less');
  return gulp.src('css/main.less')
      .pipe(less())
      .pipe(gulp.dest('css'));
});

gulp.task('templates', function() {
  return gulp.src('templates/**/*.jade')
      .pipe(jade({
        pretty: "\t",
        locals: JSON.parse(fs.readFileSync("data.json", 'utf8'))
      }))
      .pipe(gulp.dest("public"));
});

gulp.task('copy', ['sass', 'templates'], function () {
  gulp.src("css/**/*.css")
      .pipe(cachebust({type: 'timestamp'}))
      .pipe(gulp.dest("build/css"));
  gulp.src("img/**/*.*")
      .pipe(gulp.dest("build/img"));
  gulp.src("img/edera_sig.png")
    .pipe(gulp.dest("build"));
  gulp.src("img/favicon.png")
    .pipe(gulp.dest("build"));
  gulp.src("anticorr-materials/**/*")
      .pipe(gulp.dest("build/anticorr-materials"));
  gulp.src("unicef/*.*")
      .pipe(gulp.dest("build/unicef"));
  //gulp.src("cases/*.*")
  //    .pipe(gulp.dest("build/cases"));
  gulp.src("js/**/*.js")
      .pipe(gulp.dest("build/js"));
  gulp.src("public/about.html")
      .pipe(rename("index.html"))
      .pipe(gulp.dest("build/about"));
  gulp.src("public/courses.html")
      .pipe(rename("index.html"))
      .pipe(gulp.dest("build/courses"));
  gulp.src("public/index.html")
      .pipe(rename("index.html"))
      .pipe(gulp.dest("build"));
  gulp.src("public/mon.html")
      .pipe(rename("mon.html"))
      .pipe(gulp.dest("build"));
  gulp.src("public/zno.html")
      .pipe(rename("index.html"))
      .pipe(gulp.dest("build/zno"));
  //gulp.src("public/mun.html")
  //    .pipe(rename("mun/index.html"))
  //    .pipe(gulp.dest("build"));
  gulp.src("public/children_ru.html")
      .pipe(rename("children-ru/index.html"))
      .pipe(gulp.dest("build"));
  gulp.src("public/children_ua.html")
      .pipe(rename("children-ua/index.html"))
      .pipe(gulp.dest("build"));
  gulp.src("public/world2030.html")
      .pipe(rename("world2030/index.html"))
      .pipe(gulp.dest("build"));
  gulp.src("public/lesson1.html")
      .pipe(rename("world2030/lesson1/index.html"))
      .pipe(gulp.dest("build"));
  gulp.src("public/lesson2.html")
      .pipe(rename("world2030/lesson2/index.html"))
      .pipe(gulp.dest("build"));
  gulp.src("public/lesson3.html")
      .pipe(rename("world2030/lesson3/index.html"))
      .pipe(gulp.dest("build"));
  gulp.src("public/talents.html")
      .pipe(rename("talents.html"))
      .pipe(gulp.dest("build"));
  gulp.src("public/partnership.html")
      .pipe(rename("index.html"))
      .pipe(gulp.dest("build/partnership"));
  gulp.src("public/team.html")
      .pipe(rename("index.html"))
      .pipe(gulp.dest("build/team"));
  gulp.src("public/ukr-blended.html")
      .pipe(rename("index.html"))
      .pipe(gulp.dest("build/ukr-blended"));
  gulp.src("public/mon59.html")
      .pipe(rename("index.html"))
      .pipe(gulp.dest("build/mon59"));
  gulp.src("public/mon-nature.html")
      .pipe(rename("index.html"))
      .pipe(gulp.dest("build/mon-nature"));
  gulp.src("public/making.html")
      .pipe(rename("index.html"))
      .pipe(gulp.dest("build/making"))
      .pipe(browserSync.stream());
  gulp.src("public/books.html")
      .pipe(rename("index.html"))
      .pipe(gulp.dest("build/books"));
  gulp.src("templates/tos.html")
      .pipe(gulp.dest("build"));
  gulp.src("public/fundraising.html")
    .pipe(rename("index.html"))
    .pipe(gulp.dest("build/fundraising"));
  gulp.src("robots.txt")
      .pipe(gulp.dest("build"));
  gulp.src("isef/*")
      .pipe(gulp.dest("build/isef"));
  gulp.src("isef/img/*")
      .pipe(gulp.dest("build/isef/img"));
  gulp.src("public/lzv-rights/*.*")
      .pipe(gulp.dest("build/lzv-rights"));      
  gulp.src("public/25/*.*")
      .pipe(gulp.dest("build/modules"));
  gulp.src("public/anticorr/**/*")
      .pipe(gulp.dest("build/anticorr"));

  // FONT FOR ANTICORR GAME
    gulp.src("css/**/r-redstar_8.*")
        .pipe(cachebust({type: 'timestamp'}))
        .pipe(gulp.dest("build/css"));

  _.each(books, function (book) {
    gulp.src("public/books/" + book + ".html")
        .pipe(rename("index.html"))
        .pipe(gulp.dest("build/books/" + book + ""));
  });
});

gulp.task('watch', function () {
  gulp.watch(['js/**/*.js', 'templates/**/*.jade', 'css/*.css', 'css/*.less', 'css/*.scss', 'css/**/*.scss'], ['copy']);
});

// Static Server + watching scss/html files
gulp.task('serve', ['copy', 'watch'], function () {
    browserSync.init({
      server: {
          baseDir: "./build/"
      }
    });
});
