#initialize node packages
yarn init;

#files to server side and frontend
mkdir lib;

#html public folder
mkdir public;

#add linter for javascript and react
yarn add --dev eslint eslint-plugin-react babel-eslint

#add jslinter config. 
#Copy file url:https://raw.githubusercontent.com/samerbuna/.files/master/.eslintrc.js
touch .eslintrc.js

#install server
yarn add express

#install Java Script Template EJS
yarn add ejs;
#Folfer por ejs files
mkdir views;

#work with env variables
yarn add dotenv

#hot reload node server
yarn add pm2


#add babel to use ES6/ES2015 AND use JSX
yarn add @babel/cli @babel/preset-react @babel/preset-env @babel/node

#add script to start dev server usin pm2 in packege.json
#"dev": "pm2 start lib/server.js --watch --interpreter babel-node"

#add babel preset to packege.json
#"presets": ["@babel/preset-react", "@babel/preset-env"]


#pm2 commands:
#To see logs: yarn pm2 logs

#create react component
mkdir components;
touch index.js

#install react react-dom and webpack to generate bundle
yarn add react react-dom webpack webpack-cli

#create webpack config file
touch webpack.config.js
#copy webpack loader from documentation: https://webpack.js.org/concepts/#loaders

#add Babel loader for webpack
yarn add babel-loader @babel/core 

#For use Babel class propertys and other ES6 
yarn add @babel/polyfill

#class props with babel
yarn add @babel/plugin-proposal-class-properties
