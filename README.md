# Browserslist Demo

This project uses [browserslist](https://github.com/ai/browserslist) and [PostCSS](https://github.com/postcss/postcss) to determine settings for [autoprefixer](https://github.com/postcss/autoprefixer).

## Why make this?

The config settings in `package.json` for [browserslist](https://github.com/ai/browserslist) offer a centralized place to keep this data. It can be used for polyfills, linters, and css prefix settings. 

This can also be useful when developing code for a specific geographic area, and can easily be used with Google Analytics data.

## Credits
This is an original project but uses code from a simple Webpack config, found in this tutorial: [The Minimal React + Webpack 4 + Babel Setup](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/#webpack-react-setup)