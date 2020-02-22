
// ref: https://umijs.org/config/
export default {
  // base: '/site',
  // publicPath: '/site/',  //js, css url前缀
  theme: './theme.js',
  treeShaking: true,
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [
  //       { path: '/', component: '../pages/index' }
  //     ]
  //   }
  // ],
  proxy: {
    '/api': {
      target: 'http://localhost:8889',
      pathRewrite: { '/api': ''}
    }
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'umi-app',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}
