
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/code_challenge'
  : '/',
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'Code Challenge Rogério Caetano';
      return args;
    });
    config
    .externals({
      AFRAME: 'AFRAME',
    })
    return config;
  }
}