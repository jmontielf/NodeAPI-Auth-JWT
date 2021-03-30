## Welcome to Node API - Auth + JWT 👋

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
<a href="#" target="_blank">
	<img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
</a>
<a href="https://twitter.com/jmontielf" target="_blank">
	<img alt="Twitter: jmontielf" src="https://img.shields.io/twitter/follow/jmontielf.svg?style=social" />
</a>
</p>

> Node API that handles authentication in our app. We will use mongodb as our database, mongoose to create models and to connect to our express server, bcryptjs to hash passwords and jwt to check for private routes.

## Pre-requisites

- MongoDB Atlas Database - https://www.mongodb.com/  - Free tier recommended for testing.
- Code Editor

## Install

```sh
npm install
```

## Usage

With your favorite editor, change the values in ***example.env*** on main directory:

```
## example.env for Atlas-mongodb 
DB_CONNECT='mongodb+srv://[your_db_connect]'
PORT=3000
TOKEN_SECRET='XXXXX-XXXX-XXXX-XXXX-XXXX'
```

rename the ***example.env*** to ***.env ***

Now execute the command:

```sh
npm run dev
```

```sh
auth@1.0.0 dev C:\NodeAPI-Auth-JWT
nodemon index.js

[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Server up & running in port 3000
Connected to db
```

## Author

#### 👤 **jmontielf**

- Website: https://jmontielf.dev
- Twitter: [@jmontielf](https://twitter.com/jmontielf)
- Github: [@jmontielf](https://github.com/jmontielf)

## Show your support

Give a ⭐️ if this project helped you!
