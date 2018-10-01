const path = require('path');

module.exports = {
  mode: "production",
  entry: "./app/assets/scripts/app.js",
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "bundle.js"
  }
};
