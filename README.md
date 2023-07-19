# reactWebpack
this will tell how webpack works in the creation of the react app
here we will create a react without using CRA command manually adding all the necessary files
configure webpack and typescript  to allow rendering of images and SVGs 
# Set up webpack config for different environments like dev  and  prod
add react refresh 
Linting with ESLint
code formating with prettier
Husky 

# step 1
initiate git 
add gitignore (node modules and build)
create build , src folders  add index.html in src 
create package.json file by using **npm init**
in package.json add react, react-dom in the dependencies 
"react": "18.2.0","react-dom": "^18.2.0"
    
yarn add  
"@types/react": "^18.2.15", "@types/react-dom": "^18.2.7",

add tsconfig.js file

in src add App.tsx and index.tsx files 

to convert react and ts files to js by installing babel  
yarn add 
"@babel/preset-env": "^7.22.9",
    "@babel/preset-react": "^7.22.5",
    "@babel/preset-typescript": "^7.22.5",
create .babelrc config file 

 yarn add webpack a module bundler to bundle all the files of the react 
  "webpack": "^5.88.2",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1"

yarn add babel-loader also 

create folder webpack
create webpack.config.js
 entry point , resolver , module ..rules   s
 et the mode: development/ prod  
 use loader: babel-loader output of the webpack to build folder  outputted to bundle.js file 

add npm script to run the file  in package.json
 start: "webpack serve --config..."

add style.css files in the src folder  webpack throws error cant process scc ..
  yarn add style-loader css-loader  to process css files
  add module  rules test:/\.css
                         use:[css loader, style loader]

add image to src 
 try to render in app component  webpack throws error cant process image
  add  separate rules in the webpack config


  # 3/8

# separate config for diff environments
 remove mode : development in webpack.config.js
 create 3 files in webpack folder 
  1) webpack.common.js //default configs 
  2) webpack.config.js  //merged config  of common with either prod /dev config
  3) webpack.dev.js
  4) webpack.prod.js

 add  separate scripts for dev and prod in the package.json as well  by mentioning --env env=prod /env=dev same as webpack filename
 yarn build  ,, it will generate bundle.js 
 cd ./build  run npx serve 


 # developer experiance enhancer

 # Hot module replacement

1) yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh
 2) webpack.dev.config devserver:{
         hot :true
    }
remove --open
add open:true in devServer
webpack.dev.config devserver:{
         hot :true,
         open :true,
    }

# ESLint tool 
1) related packages as dev dependencies
2) yarn add eslint //core lib
3) additional  yarn add -D eslint-plugin-react eslint-plugin-react-hooks , @typescrip-eslint/parser @typescrip-eslint/eslint-plugin
4) create config file .eslintrc.js
5) set custom rules
6) add eslint script in the package.json    "eslint": "eslint --fix \"./src/**/*.{js,jsx,ts,tsx,json}\"",
7) yarn eslint

# Prettier
1) yarn add prettier packages
2) create config file to add rules
3) add format script in the package.json file
   



