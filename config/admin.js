module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0ee174fd45976af76f0603614851b5be'),
  },
  watchIgnoreFiles: [
    './fontend', // Folder
    'C:/Users/Memo/Downloads/home/home/nodejs/strapi-sveltekit/fontend',
    '/home/viethung/Desktop/Memo/nodejs/strapi-sveltekit/fontend',
    '/home/viethung/Desktop/Memo/home/nodejs/strapi-sveltekit/fontend',
    'E:/memo/nodejs/strapi-sveltekit/fontend'
  ],
});
