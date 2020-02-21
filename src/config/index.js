const Config = {
  common: {
    tokenCookieAttr: '__login_token'
  },
  dev: {
    hostname: 'http://localhost:8889'
  },
  prod: {
    hostname: 'http://121.36.137.124:8889'
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


