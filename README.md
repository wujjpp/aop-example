# 微服务基础架构

## Features
- [Webpack 3](https://webpack.js.org/)
- [Babel 6](https://babeljs.io/)
- Supports server auto compile and restart


[![build status](http://git.qixin007.com/qxb/micro-service-boilerplate/badges/master/build.svg)](http://git.qixin007.com/qxb/micro-service-boilerplate/commits/master)

## How to Install
```shell
$ git clone https://github.com/qxb/micro-service-boilerplate.git
$ cd micro-service-boilerplate
$ npm install
```

## How to Run and Build
#### Run
```shell
$ npm start
 ```

#### Build
```shell
$ npm run build
```


## Analyse webpack stats
We have integrated tools for analysing bundled file, after run `npm run build`, try to type the following command in your terminal.

```shell
$ npm run analyse:server
```

```shell
$ npm run analyse
```

## Directory Layout
```
.
├── /src/                          # The source code of the application
│   ├── /config/                   # System configuration file by env
│   ├── /core/                     # Core module or utility library
│   ├── /server-api.js             # 当这个应用是一个api服务的时候，将该文件改名成server.js，并且删除server-job.js
│   └── /server-job.js             # 当这个应用是一个后台Job的时候，将该文件改名成server.js，并且删除server-api.js
├── /tests/                        # Unit and end-to-end tests
├── /tools/                        # Build automation scripts and utilities
│   ├── /analyse/                  # analyse tools for webpack stats
│   ├── /libs/                     # Library for build system
│   ├── /webpack/                  # Webpack config files
│   ├── /build-server.js           # Scripts for build server app
│   ├── /build.js                  # Scripts for build client and server
│   ├── /clean.js                  # Cleans up for the output (build) folder
│   ├── /config.js                 # Build config file
│   ├── /copy.js                   # Copy package.json, public folder and assets.json
│   ├── /run.js                    # Helper function for running build automation tasks
│   ├── /start.js                  # Launches the development web server with "live reload"
│   └── /watch.js                  # watch public folder, if changed copy files to dist/public folder
├── /.gitlab-ci-with-port.yml      # 当这个应用是一个api服务的时候，删除gitlab-ci.yml和.gitlab-ci-with-port.yml
│                                    并且将该文件改名成gitlab-ci.yml, gitlab持续集成持续部署配置
├── /.gitlab-ci-without-port.yml   # 当这个应用是一个后台job的时候，删除gitlab-ci.yml和.gitlab-ci-with.yml
│                                    并且将该文件改名成gitlab-ci.yml, gitlab持续集成持续部署配置
└── package.json                   # The list of 3rd party libraries and utilities
```

## How to Update
```shell
$ git checkout master
$ git pull origin master
$ npm install
```

Made with ♥ by Wu Jian Ping
