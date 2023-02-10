const prod = process.env.NODE_ENV === 'production';

module.exports = {
  backendUrl: prod ? 'prod address' : 'http://localhost:3000/api',
};
