Q.1 Is your code ready to push for production ?
Q.2 What is npm ? manages package but it is not node package manager
Q.3 What is package.json ? it is configuration for npm
Q.4 What does create react app do ? use webpack and babel behind the scene
Q.5 dev & normal dependency ? normal need in production also
Q.6 caret & tilde in package.json ? auto minor upgrade, install major version auto
Q.7 what is package-lock.json ? it keeps track of exact version that is installed
Q.8 transitive dependencies ? node modules - one dependency can have another and again another
Q.9 how many package.json and package-lock.json ? many in node modules
Q.10 It is important to keep package and lock in git ? so that you can recreate your node modules exact that was in local

- whatever version in my machine it's same version deployed on production to prevent local and prod mismatch there is integrity sha in lock file

Q.11 npx ? it executes package
Q.12 cdn is not preferred way to bring react and r-dom in project ?

- no need to make another network call & easy to

Q.13 if install react and remove cdn react, does this work? no we have to do import React from "react";

- and also type="module" in script as import is not recognised by browserscript or normal js part

npm init
npm install -D parcel
npx parcel index.html

node_modules is like database

#Parcel

- dev build
- local server
- caching - faster build
- HMR hot module replacement
- file watching algorithm written in c++
- image optimization
- minification of file
- bundling file
- compressing file
- content hashing
- code splitting
- differential bundling - to support older browser, diff bundle for diff type of browser
- Diagnostics
- Error Handling
- hosting app in https
- reliable caching
- tree shaking - remove unused code for you
- web workers & service workers
- diff dev and prod build (npx parcel build index.html)( remove from pkg.json "main": "index.js", remove error)
  very beautiful documentation of Parcel
