// config/index.js
const dbuser = 'admin';
const dbpassword = 'admin1234';

const MONGODB_URI = `mongodb://${dbuser}:${dbpassword}@ds031847.mlab.com:31847/mern-demo`;

module.exports = MONGODB_URI;