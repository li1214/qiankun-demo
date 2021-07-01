# **微前端 qiankuan架构demo**

> 微前端框架qiankuan实战demo,主应用 <font color="#f60">**main-app**</font> 基于Vue3，子应用分别为JQuery，Vue2，Vue3。

## **install**


```bash
# 整个项目install
$ npm install # yarn install

# 单个项目install
$ npm install:main              # yarn install
$ npm install:sub-app-jquery    # yarn install:sub-app-jquery
$ npm install:sub-app-vue2      # yarn install:sub-app-vue2
$ npm install:sub-app-vue3      # yarn install:sub-app-vue3
```

## **Run Start**

```bash
# 整个项目start
$ npm start                     # yarn start

# 单个项目start
$ npm start:sub-app-jquery      # yarn start:sub-app-jquery
$ npm start:sub-app-vue2        # yarn start:sub-app-vue2
$ npm start:sub-app-vue3        # yarn start:sub-app-vue3
```
> 通过 [http://localhost:8080/ ](http://localhost:8080/)访问