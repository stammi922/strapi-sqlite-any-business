module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['b7f8c2e1d4a5f6b7c8d9e0f1a2b3c4d5', 'e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1'])
  },
});
