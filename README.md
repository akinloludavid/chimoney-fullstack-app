# Chimoney Fullstack Challenge

This is a solution to the [Fullstack Development Challenge on chimoney's community]
This project is divided into two directories 
- client - This is where the client side logic, UI implementation and API is integrated 
- api - This is where all the server side code and logic resides


## Overview

### The challenge

Users should be able to:

- Signup, login and logout securely
- View wallet balance
- Get transactions history
- Request Payment
- Transfer money
- Security measures - data encryption


## Client Folder


- Live Site URL: [https://chimoney-ak-test.netlify.app/](https://chimoney-ak-test.netlify.app/)

## My process

### Built with


- [React ](https://reactjs.org/) - JS library
- [ChakraUI ](https://chakra-ui.com/) - React Library
- [Typescript ](https://www.typescriptlang.org/) 
- [Vite ](https://vitejs.dev/) - Build tool
- [Tanstack - React Query ](https://tanstack.com/query/latest) - Server state and api integration




### What I learned

One thing i learned while working on this project is how to encrypt and decrypt data between the client and server.
I also learnt how to encrypt user data in local storage.


### CI/CD
I implemented a CI/CD process for the client using github actions. 
The workflow for the client side can be found in the .github/workflows/client.yml

### How To Run Locally

clone the repo: (https://github.com/akinloludavid/chimoney-fullstack-app)
- cd into the ```client``` folder
- Ensure you use Node 18 and above
- run ```npm install```
- run ```npm run dev``` to start the server locally.
- run ```npm run build``` to build the server locally.

You'd actually need some environmental variables from me to start the local server successfully

## Deployment
The site is automatically deployed on netlify when a push or pr is made to the ``main`` branch



## API Folder

- Live Site URL: [https://chimoney-fullstack-app.onrender.com/](https://chimoney-fullstack-app.onrender.com/)
Health endpoint = /health

### Built with


- [Node ](https://nodejs.org/) - JS Runtime
- [Express ](https://expressjs.com/) - Nodejs Framework
- [Typescript ](https://www.typescriptlang.org/) 
- [TSC ](https://www.npmjs.com/package/tsx) - Typescript execute in Node



### What I learned

- One thing i learned while working on this project is how to encrypt and decrypt data between the client and server.
I also learnt how to encrypt user data in local storage.
- I also learnt how use firebase-admin on the backend


### CI/CD
I implemented a CI/CD process for the api using github actions. 
The workflow for the client side can be found in the .github/workflows/apu.yml

### How To Run Locally

- clone the repo: (https://github.com/akinloludavid/chimoney-fullstack-app)
- cd into the ```api``` folder
- Ensure you use Node 18 and above
- run ```npm install```
- run ```npm run dev``` to start the server locally.
- run ```npm run build``` to build the server locally.

You'd actually need some environmental variables from me to start the local server successfully


## Deployment
The site is automatically deployed on render when a push or pr is made to the ``main`` branch


## Author

- Website - [AKINLOLU](https://akinloludavid-portoflio.netlify.app/)
- Twitter - [@akinloludavid_](https://www.twitter.com/akinloludavid_)

