module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0ee174fd45976af76f0603614851b5be'),
  },
  watchIgnoreFiles: [
      './fontend', // Folder
    ],
});
