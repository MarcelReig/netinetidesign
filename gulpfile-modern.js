// Modern Gulpfile.js 2025
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const imagemin = require("gulp-imagemin");
const del = require("del");
const browserSync = require("browser-sync").create();
const shell = require("gulp-shell");

// Modern CSS processing
const cssProcessors = [
  autoprefixer(),
  cssnano({
    preset: [
      "default",
      {
        discardComments: { removeAll: true },
        normalizeWhitespace: false,
      },
    ],
  }),
];

// Image optimization with modern formats
function optimizeImages() {
  return gulp
    .src("_assets/images/**/*.{jpg,jpeg,png,gif,svg}")
    .pipe(
      imagemin([
        imagemin.mozjpeg({ quality: 85, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: false }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest("assets/images/"));
}

// Critical CSS extraction
function criticalCSS() {
  return gulp
    .src("_assets/styles/critical.scss")
    .pipe(sass({ includePaths: ["node_modules"] }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("_includes/"));
}

// Modern SCSS compilation
function buildStyles() {
  return gulp
    .src("_assets/styles/main.scss")
    .pipe(
      sass({
        includePaths: ["node_modules"],
        outputStyle: "expanded",
      })
    )
    .pipe(
      postcss(
        process.env.NODE_ENV === "production" ? cssProcessors : [autoprefixer()]
      )
    )
    .pipe(gulp.dest("assets/css/"))
    .pipe(browserSync.stream());
}

// Service Worker generation
function generateSW() {
  return gulp.src("").pipe(shell(["npx workbox generateSW workbox-config.js"]));
}

// Modern task composition
const build = gulp.series(
  clean,
  gulp.parallel(
    buildStyles,
    criticalCSS,
    optimizeImages,
    buildScripts,
    buildFonts
  ),
  buildJekyll,
  generateSW
);

const dev = gulp.series(build, gulp.parallel(watchFiles, serve));

module.exports = {
  build,
  dev,
  default: dev,
};
