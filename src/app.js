// import router from 'umi/router';
// export function render(oldRender) {
//   console.log('render:')
//   console.log(oldRender);
//   if(false){
//     oldRender();
//   }else{
//     router.push('/login')
//     oldRender();
//   }
// }

export const dva = {
  config: {
    onError(e) {
      e.preventDefault();
      console.error(e.message);
    },
  },
  plugins: [
    // require('dva-logger')(),
  ],
};
