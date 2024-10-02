# Keyword

1. module bundler
* A development tool that finds all the files that an application depends on and combines them into a single loadable file.
* https://dev.to/mustafamilyas/brief-explanation-of-javascript-module-bundler-b1k
* https://third-bit.com/sdxjs/module-bundler/#:~:text=A%20module%20bundler%20finds%20all,but%20just%20one%20network%20request.
2. Webpack
* Module bundler that is used with React to bundle and manage dependencies.
* https://www.scaler.com/topics/react/webpack-in-react/
3. search engine crawlers
* crawler or web spider, is a computer program that's used to search and automatically index website content and other information over the internet.
* https://www.techtarget.com/whatis/definition/crawler#:~:text=A%20web%20crawler%2C%20crawler%20or,for%20a%20search%20engine%20index.

# Folder inside React

1. node_modules 
* node_modules is a folder which stores external dependencies (external package) of the project. 
* https://www.bacancytechnology.com/qanda/node/purpose-of-the-node-modules-folder#:~:text=node_modules%20is%20a%20folder%20which,the%20project%20directory%20by%20default.
2. src 
* src contains TS and CSS source code files.
* You need to put any TS and CSS files inside src, otherwise webpack won’t see them.
3. public
* Only files inside public can be used from public/index.html. 
* The public folder is where you put the files that need to be publicly available, e.g. images, fonts, etc.
* The public folder is a special folder that contains files that are not processed by webpack.
4. build
* build is where compiled version of assets are placed when you run npm build. This is what will get delivered to user
* https://stackoverflow.com/questions/52266892/meaning-of-src-public-and-build-folders

For the project to build, these files must exist with exact filenames:
1. `public/index.html` is the page template;
2. `src/index.js` is the JavaScript entry point.

Reference
* https://create-react-app.dev/docs/folder-structure

# JSON file in React

1. package.json 
* This file defines the project’s basic dependencies and configuration.
2. package-lock.json 
* This file defined the entire dependency tree to specific versions, ensuring consistent and reproducible builds. 
* Guarantees consistent builds across different environments, avoiding “it works on my machine” issues.
3. tsconfig.json
* Typescript checks for syntax errors and type of variable before run time.
* tsconfig.json is Typescript setting file

Reference
* https://www.geeksforgeeks.org/difference-between-package-json-and-package-lock-json-files/
* https://www.codecademy.com/article/the-tsconfig-json-file

# File in Public Folder

1. robots.txt
* This file prevent the search engine to access some part of the website.
* Do not think about this file if there is no private part to worry about.
* https://youtu.be/qRlQ965pGCA?si=ss6xKglMO9WjC-DL
2. manifest.json 
* This is a file that provides information about a web application.
* The information tells the browser to install a progressive web app (PWA) on a device with the given app's name and icon.
* https://stackoverflow.com/questions/45186993/what-is-public-manifest-json-file-in-create-react-app
* https://developer.mozilla.org/en-US/docs/Web/Manifest
3. index.html
* The entry point for your web application.
* https://www.bacancytechnology.com/qanda/react/index-html-and-index-js-in-a-create-react-app-application#:~:text=Functioning%20as%20the%20principal%20HTML,Typically%20residing%20inside%20public%2Findex.

# public vs src

General recommendation
1. public folder for assets file that are large, static, and rarely changed.
2. src folder for assets file that are small, dynamic, and frequently changed.
* https://medium.com/@atenanavidii/choosing-between-public-and-src-folder-for-assets-file-in-a-react-app-fec504477149

You can also add other assets to the public folder. Note that we normally encourage you to import assets in JavaScript files instead. For example, see the sections on adding a stylesheet and adding images and fonts. (https://create-react-app.dev/docs/using-the-public-folder/)

ReactJs doesn’t let you import something from outside of the src folder and you should stick to that.
(https://alxbrla.medium.com/reactjs-import-from-outside-of-src-folder-d7baa1664de9)