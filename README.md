<p align="center">
Awesome bonjour web project created with Vue2.x + Vuex + Vue-router + axios
</p>

<p align="center">

[![Build Status](https://travis-ci.org/jeneser/douban.svg?branch=master)](https://travis-ci.org/jeneser/douban) [![David](https://img.shields.io/david/expressjs/express.svg?style=flat-square)](https://github.com/jeneser/douban)  [![Powered](https://img.shields.io/badge/Powered%20by-vue2%2B-brightgreen.svg)](https://github.com/vuejs/vue) [![PR](https://img.shields.io/badge/PR-welcome-brightgreen.svg)](https://github.com/jeneser/douban/pulls) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/jeneser/douban/blob/master/LICENSE)

</p>
<br>

## Features

- Vue + vue-router + vuex + axios working together
- Vuex divide store into modules
- Modern JavaScript syntax with ES6/ES7
- vue-cli webpack template
- Single-file Vue Components
- API request seperated
- Real remote API and some mock data
- eslint linter integration
- Hot-reload in development
- Css with Sass
- No third party CSS framework
- Complex and different style view logic
- Infinite loading list
- Complete search logic
- Custom components like List, Rating, Tags ...
- Authentication with JSON Web Tokens
- Complete register login logic
......


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Libraries

- [Vuex](https://vuex.vuejs.org) : Centralized State Management for Vue.js
- [Vue-router](http://router.vuejs.org/) : The official router for Vue.js
- ~~[vue-resource](https://github.com/pagekit/vue-resource) : The HTTP client for Vue.js~~
- [Superagent](https://github.com/visionmedia/superagent) : Ajax with less suck - (and node.js HTTP client to match)
- [vue-infinite-loading](https://github.com/PeachScript/vue-infinite-loading) : An infinite scroll plugin for Vue.js 1.0 & Vue.js 2.0.
- [normalize.css](https://github.com/necolas/normalize.css) :  A collection of HTML element and attribute style-normalizations
- [vue-scroll-behavior](https://www.npmjs.com/package/vue-scroll-behavior) :  Completely customize the scroll behavior on route navigation

## File Structure
```
.
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── index.html
├── LICENSE
├── package.json
├── README.md
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── avatar.png
│   │   └── user_normal.jpg
│   ├── components
│   │   ├── Banner.vue
│   │   ├── Card.vue
│   ├── main.js
│   ├── router
│   │   └── index.js
│   ├── store
│   │   ├── index.js
│   │   └── modules
│   │       ├── activities.js
│   │       └── user.js
│   └── pages
│       ├── BookView.vue
│       └── TalionView.vue
└── static
    └── logo.png
```

## Change log

- 2018-3-17: 
  - init project from douban to bonjour 
  - write first version home page

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Thanks

<a href="https://github.com/LIANGWEIBIAO" target="_blank"><img src="https://avatars2.githubusercontent.com/u/24608984?v=4&s=460" width="38px"></a> <a href="https://github.com/lizhanjie1314" target="_blank"><img src="https://avatars1.githubusercontent.com/u/15324887?v=4&s=460" width="38px"></a> <a href="https://github.com/fredshare" target="_blank"><img src="https://avatars3.githubusercontent.com/u/765082?v=4&s=460" width="38px"></a> <a href="https://github.com/Werb" target="_blank"><img src="https://avatars1.githubusercontent.com/u/12763277?v=4&s=460" width="38px"></a> <a href="https://github.com/jfliapp" target="_blank"><img src="https://avatars2.githubusercontent.com/u/27725921?v=4&s=460" width="38px"></a> <a href="https://github.com/bluestrings" target="_blank"><img src="https://avatars2.githubusercontent.com/u/6144152?v=4&s=460" width="38px"></a> <a href="https://github.com/silverpeng" target="_blank"><img src="https://avatars2.githubusercontent.com/u/25680922?v=4&s=460" width="38px"></a> <a href="https://github.com/KngZhi" target="_blank"><img src="https://avatars1.githubusercontent.com/u/11361147?v=4&s=460" width="38px"></a>

## License

[MIT](https://github.com/jeneser/douban/blob/master/LICENSE) Copyright (c) 2017 [Jeneser](https://jeneser.github.io/)
