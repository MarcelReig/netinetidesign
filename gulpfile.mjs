/*
 *
 * Gulp tasks for Jekyll + Bootstrap starter theme
 *
 * Table of contents:
 *   1. Fonts
 *   2. Styles
 *   3. Scripts
 *   4. Images
 *   5. Jekyll
 *   6. Local Server
 *   7  Run all in order
 *   8. Watch
 *   9. Default & production tasks
 *
 */

// Define variables
import gulp from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import uglify from "gulp-uglify";
import pump from "pump";
import order from "gulp-order";
import concat from "gulp-concat";
import autoprefixer from "gulp-autoprefixer";
import shell from "gulp-shell";
import browserSync from "browser-sync";
import log from "fancy-log";
import colors from "ansi-colors";
import del from "del";
import cache from "gulp-cache";
import newer from "gulp-newer";
import imagemin from "gulp-imagemin";

const sass = gulpSass(dartSass);
const browserSyncInstance = browserSync.create();

// Config
const config = {
  sassPaths: ["node_modules"],
  production: process.env.NODE_ENV === "production",
};

// -----------------------------------------------------------------------------
//   1: Fonts
// -----------------------------------------------------------------------------

function build_fonts() {
  return gulp
    .src("./_assets/fonts/*.{woff,woff2,eot,svg,ttf}")
    .pipe(gulp.dest("./assets/fonts"));
}
// Copy Fontawesome fonts into dist folder
function fontawesome() {
  return gulp
    .src("./node_modules/@fortawesome/fontawesome-free/webfonts/*.{woff2,ttf}")
    .pipe(gulp.dest("./assets/webfonts"));
}

// -----------------------------------------------------------------------------
//   2: CV
// -----------------------------------------------------------------------------

function build_cv() {
  return gulp.src("./_assets/cv/*.pdf").pipe(gulp.dest("./assets/cv"));
}

// -----------------------------------------------------------------------------
//  3: Styles
// -----------------------------------------------------------------------------

function build_styles() {
  log(colors.green("Compiling Sass"));
  log("config.production:" + config.production);
  if (config.production) {
    return gulp
      .src("./_assets/styles/main.scss")
      .pipe(
        sass({
          includePaths: config.sassPaths,
          outputStyle: "compressed", // if css compressed **file size**
        }).on("error", sass.logError)
      )
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions", "ie >= 9"],
        })
      )
      .pipe(gulp.dest("./assets/styles"))
      .pipe(gulp.dest("./_site/assets/styles"));
  } else {
    return gulp
      .src("./_assets/styles/main.scss")
      .pipe(
        sass({
          includePaths: config.sassPaths,
          outputStyle: "expanded", // if css compressed **file size**
        }).on("error", sass.logError)
      )
      .pipe(autoprefixer())
      .pipe(gulp.dest("./assets/styles"))
      .pipe(gulp.dest("./_site/assets/styles"))
      .pipe(
        browserSync.reload({
          stream: true,
        })
      );
  }
}

// -----------------------------------------------------------------------------
//   4: Scripts with pump
// -----------------------------------------------------------------------------

function build_scripts(done) {
  log("Compiling Scripts");
  if (config.production) {
    pump([
      gulp.src([
        "./_assets/scripts/**/*.js",
        "./node_modules/jquery/dist/jquery.min.js",
        "./node_modules/jquery-validation/dist/jquery.validate.js",
        "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
        "./node_modules/masonry-layout/dist/masonry.pkgd.min.js",
        "./node_modules/magnific-popup/dist/jquery.magnific-popup.min.js",
      ]),
      order(
        [
          "node_modules/jquery/dist/jquery.min.js",
          "node_modules/jquery-validation/dist/jquery.validate.js",
          "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
          "node_modules/masonry-layout/dist/masonry.pkgd.min.js",
          "node_modules/magnific-popup/dist/jquery.magnific-popup.min.js",
          "main.js",
        ],
        {
          base: "./",
        }
      ),
      concat("app.js"),
      uglify(),
      gulp.dest("./assets/scripts"),
    ]);
    done();
  } else {
    pump([
      gulp.src([
        "./_assets/scripts/**/*.js",
        "./node_modules/jquery/dist/jquery.js",
        "./node_modules/jquery-validation/dist/jquery.validate.js",
        "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
        "./node_modules/masonry-layout/dist/masonry.pkgd.min.js",
        "./node_modules/magnific-popup/dist/jquery.magnific-popup.min.js",
      ]),
      order(
        [
          "node_modules/jquery/dist/jquery.js",
          "node_modules/jquery-validation/dist/jquery.validate.js",
          "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
          "node_modules/masonry-layout/dist/masonry.pkgd.min.js",
          "node_modules/magnific-popup/dist/jquery.magnific-popup.min.js",
          "main.js",
        ],
        {
          base: "./",
        }
      ),
      concat("app.js"),
      gulp.dest("./assets/scripts"),
      gulp.dest("./_site/assets/scripts"),
      browserSync.reload({
        stream: true,
      }),
    ]);
    done();
  }
}

// -----------------------------------------------------------------------------
//   5: Images
// -----------------------------------------------------------------------------

function build_images() {
  return gulp
    .src("./_assets/images/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|ico)")
    .pipe(newer("./assets/images"))
    .pipe(cache(imagemin()))
    .pipe(gulp.dest("./assets/images"));
}

// WATCH : Actualización
function sync_images() {
  return gulp
    .src("./_assets/images/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|ico)")
    .pipe(newer("./assets/images"))
    .pipe(cache(imagemin()))
    .pipe(gulp.dest("./assets/images"))
    .pipe(gulp.dest("./_site/assets/images"))
    .pipe(browserSync.stream());
}

// -----------------------------------------------------------------------------
//   6: Jekyll
// -----------------------------------------------------------------------------

function build_jekyll() {
  if (config.production) {
    return gulp
      .src("index.html", {
        read: false,
      })
      .pipe(
        shell([
          "JEKYLL_ENV=production bundle exec jekyll build --config _config.yml",
        ])
      )
      .on("error", log);
  } else {
    return gulp
      .src("index.html", {
        read: false,
      })
      .pipe(
        shell([
          'bundle exec jekyll build  --config "_config.yml,_config_localhost.yml"',
        ])
      )
      .on("error", log);
  }
}

// Deletes the entire _site directory.
function clean_jekyll() {
  return del(["./_site"]);
}

// Deletes the procesed assets directory.
function clean_assets() {
  return del(["./assets"]);
}

const clean_all = gulp.series(clean_jekyll, clean_assets);

// -----------------------------------------------------------------------------
//   7: Localhost Server for development
// -----------------------------------------------------------------------------

function build_localServer() {
  log("BrowserSync setting up the server in port 4000");
  browserSync.init({
    port: 4000,
    server: {
      baseDir: "./_site/",
    },
  });
}

// reloading browsers
function browsersync_reload(done) {
  browserSync.reload();
  done();
}

// -----------------------------------------------------------------------------
//   8: Run all in order
// -----------------------------------------------------------------------------

const build_all = gulp.series(
  build_images,
  build_fonts,
  build_cv,
  fontawesome,
  build_scripts,
  build_styles,
  build_jekyll,
  build_localServer
);

// -----------------------------------------------------------------------------
//   9: Watch
// -----------------------------------------------------------------------------

function watchFiles() {
  log("watching files for changes");
  gulp.watch("_assets/styles/**/*.scss", build_styles);
  gulp.watch("_assets/scripts/*.js", build_scripts);
  gulp.watch(
    "_assets/images/**/*.+(ico|jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG)",
    gulp.series(sync_images, browsersync_reload)
  );
  gulp.watch(
    ["**/*.+(html|md|markdown|MD)", "!_site/**/*.*"],
    gulp.series(build_jekyll, browsersync_reload)
  );
}

// -----------------------------------------------------------------------------
//   10: Default task
// -----------------------------------------------------------------------------

const build = gulp.series(clean_all, gulp.parallel(build_all, watchFiles));
// For production execute: $ gulp --environment production

// export tasks
export default build;
export { clean_assets, clean_jekyll, watchFiles as watch };

gulp.task("build_styles", () => {
  return gulp
    .src("src/styles/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/styles"));
});

gulp.task("default", gulp.series("build_styles"));
