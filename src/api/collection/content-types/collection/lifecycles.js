const slugify = require('slugify');

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;

    console.log(data);
    if (data.title) {
      data.slug = slugify(data.title, {lower: true});
    }

    console.log(event)
  },

  async beforeUpdate(event) {
    const { data } = event.params;

    console.log(data);
    if (data.title) {
      data.slug = slugify(data.title, {lower: true});
    }
  },
};
