const scss = '@/scss/';

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "${scss}normalize.scss";
            @import "${scss}styles.scss";
          `,
      },
    },
  },
};
