const slugify = require('slugify');

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;

    if (data.title) {
      if ( !data.slug )
        data.slug = slugify(data.title, {lower: true});
      else
        data.slug = slugify(data.slug, {lower: true});
    }
  },

  async beforeUpdate(event) {
    const { data } = event.params;

    if (data.title) {
      if ( !data.slug )
        data.slug = slugify(data.title, {lower: true});
      else
        data.slug = slugify(data.slug, {lower: true});
    }
  },
};
