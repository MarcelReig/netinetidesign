const gulp = require("gulp");
const gulpSass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const { spawn } = require("child_process");
const browserSync = require("browser-sync").create();
const log = require("fancy-log");
const colors = require("ansi-colors");
const del = require("del");
const newer = require("gulp-newer");

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
        gulpSass({
          includePaths: config.sassPaths,
          outputStyle: "compressed",
        }).on("error", gulpSass.logError)
      )
      .pipe(autoprefixer())
      .pipe(gulp.dest("./assets/styles"))
      .pipe(gulp.dest("./_site/assets/styles"));
  } else {
    return gulp
      .src("./_assets/styles/main.scss")
      .pipe(
        gulpSass({
          includePaths: config.sassPaths,
          outputStyle: "expanded",
        }).on("error", gulpSass.logError)
      )
      .pipe(autoprefixer())
      .pipe(gulp.dest("./assets/styles"))
      .pipe(gulp.dest("./_site/assets/styles"))
      .pipe(browserSync.reload({ stream: true }));
  }
}

// -----------------------------------------------------------------------------
//   4: Scripts
// -----------------------------------------------------------------------------

function build_scripts() {
  log("Compiling Scripts");
  const srcFiles = [
    "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
    "./_assets/scripts/main.js",
  ];

  if (config.production) {
    return gulp
      .src(srcFiles)
      .pipe(concat("app.js"))
      .pipe(uglify())
      .pipe(gulp.dest("./assets/scripts"));
  } else {
    return gulp
      .src(srcFiles)
      .pipe(concat("app.js"))
      .pipe(gulp.dest("./assets/scripts"))
      .pipe(gulp.dest("./_site/assets/scripts"))
      .pipe(browserSync.reload({ stream: true }));
  }
}

// -----------------------------------------------------------------------------
//   5: Images (solo copia, sin optimizar)
// -----------------------------------------------------------------------------

function build_images() {
  return gulp
    .src("./_assets/images/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|ico|webp)")
    .pipe(newer("./assets/images"))
    .pipe(gulp.dest("./assets/images"));
}

function sync_images() {
  return gulp
    .src("./_assets/images/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|ico|webp)")
    .pipe(newer("./assets/images"))
    .pipe(gulp.dest("./assets/images"))
    .pipe(gulp.dest("./_site/assets/images"))
    .pipe(browserSync.stream());
}

// -----------------------------------------------------------------------------
//   6: Jekyll
// -----------------------------------------------------------------------------

function build_jekyll(done) {
  const args = ["exec", "jekyll", "build"];
  const env = Object.assign({}, process.env);

  if (config.production) {
    args.push("--config", "_config.yml");
    env.JEKYLL_ENV = "production";
  } else {
    args.push("--config", "_config.yml,_config_localhost.yml");
  }

  spawn("bundle", args, { stdio: "inherit", env }).on("close", done);
}

function clean_jekyll() {
  return del(["./_site"]);
}

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
    server: { baseDir: "./_site/" },
  });
}

function browsersync_reload(done) {
  browserSync.reload();
  done();
}

// -----------------------------------------------------------------------------
//   8: Run all in order
// -----------------------------------------------------------------------------

const build_all = gulp.series(
  gulp.parallel(build_images, build_fonts, build_cv, fontawesome, build_scripts, build_styles),
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
    "_assets/images/**/*.+(ico|jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|ico|webp)",
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

exports.default = build;
exports.watch = watchFiles;
exports.clean_assets = clean_assets;
exports.clean_jekyll = clean_jekyll;
exports.build_styles = build_styles;
exports.build_fonts = build_fonts;
exports.fontawesome = fontawesome;
exports.build_cv = build_cv;
exports.build_scripts = build_scripts;
exports.build_images = build_images;
exports.sync_images = sync_images;
exports.build_jekyll = build_jekyll;
exports.build_localServer = build_localServer;
exports.browsersync_reload = browsersync_reload;
