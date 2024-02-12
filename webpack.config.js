const path = require('path');
const autoprefixer = require('autoprefixer');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HandlebarsPlugin = require('handlebars-webpack-plugin');
const mergeJSON = require('handlebars-webpack-plugin/utils/mergeJSON');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const webpack = require('webpack');

const paths = {
  src: {
    imgs: './src/assets/img',
    scss: './src/assets/scss',
    fonts: './src/assets/fonts',
    js: './src/assets/js',
    favicon: './src/assets/favicon',
  },
  dist: {
    imgs: './img',
    css: './css',
    fonts: './fonts',
    js: './js',
    favicon: './favicon'
  }
}

const projectData = mergeJSON(path.join(__dirname, '/src/data/**/*.json'));

const wp = {
  entry: {
    'bootstrap': [paths.src.js + '/bootstrap.js', paths.src.scss + '/bootstrap.scss'],
    'custom': [paths.src.js + '/custom.js', paths.src.scss + '/custom.scss']
  },
  output: {
    filename: paths.dist.js + '/[name].js'
  },
  //devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader',
            options: {url: false}
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/](node_modules)[\\/].+\.js$/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      })
    ],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new CssMinimizerPlugin(),
    new webpack.ProgressPlugin(),
    new CopyPlugin({
      patterns: [{
        from: paths.src.fonts,
        to: paths.dist.fonts,
        noErrorOnMissing: true
      },
      {
        from: paths.src.imgs,
        to: paths.dist.imgs,
        noErrorOnMissing: true
      },
      {
        from: paths.src.favicon,
        to: paths.dist.favicon,
        noErrorOnMissing: true
      }
      ],
    }),
    new HandlebarsPlugin({
      entry: path.join(process.cwd(), 'src', 'html', '**', '*.html'),
      output: path.join(process.cwd(), 'dist', '[path]', '[name].html'),
      partials: [path.join(process.cwd(), 'src', 'partials', '**', '*.{html,svg}')],
      data: projectData,
      helpers: {
        webRoot: function () {
          return '{{webRoot}}';
        },
        config: function (data) {
          return data;
        },
        ifEquals: function (arg1, arg2, options) {
          if (arg1 === arg2) {
            return options.fn(this);
          }
          return options.inverse(this);
        },
        log: function (data) {
          console.log(data);
        },
        limit: function (arr, limit) {
          if (!Array.isArray(arr)) { return []; }
          return arr.slice(0, limit);
        }
      },
      onBeforeSave: function (Handlebars, res, file) {
        const elem = file.split('//').pop().split('/').length;
        return res.split('{{webRoot}}').join('.'.repeat(elem));
      },
    }),
    new miniCssExtractPlugin({
      filename: paths.dist.css + '/[name].css',
    })
  ]

}
module.exports = wp;