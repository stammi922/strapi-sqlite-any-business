module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b4dbad35-6caa-4f84-be56-90d0d3bc2fdf'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'e1f2d3c4b5a6978877665544332211ff')
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'aabbccddeeff00112233445566778899')
    }
  }
});
