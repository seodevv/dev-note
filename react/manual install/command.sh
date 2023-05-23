mkdir manual-react
cd manual-react

npm init
npm i react react-dom
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
npm i -D webpack webpack-cli

(package.json)
{
  "name": "2.wordrelay",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack"
  },
  "author": "seodevv",
  "license": "ISC",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.21.8",
    "@babel/preset-env": "^7.21.5",
    "@babel/preset-react": "^7.18.6",
    "babel-loader": "^9.1.2",
    "webpack": "^5.83.1",
    "webpack-cli": "^5.1.1"
  }
}


