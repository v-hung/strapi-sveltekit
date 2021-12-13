'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('variants')
      .service('myService')
      .getWelcomeMessage();
  },
};
