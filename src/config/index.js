const Config = {
  common: {
    loginTokenKey: '__login_token'
  },
  dev: {
    hostname: 'http://localhost:8000',
    basePath: '/',
    publicPath: '/',
  },
  prod: {
    hostname: 'http://121.36.137.124:80',
    basePath: '/site',
    publicPath: '/site/',
  },


}

const getConfig = (key) => {
  if(process.env.NODE_ENV === 'development') {
    return key in Config.dev ? Config.dev[key] : Config.common[key];
  } else {
    return key in Config.prod ? Config.prod[key] : Config.common[key];
  }
}

export { getConfig }


