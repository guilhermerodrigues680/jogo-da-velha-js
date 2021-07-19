module.exports = {
  // lintOnSave: true,
  publicPath: '',

  chainWebpack: config => {
    // vue inspect --plugin html
    // Altera titulo do html
    config.plugin('html').tap((args) => {
      args[0].title = 'Tic Tac Toe - Vue.js';
      return args;
    });
  },
};
