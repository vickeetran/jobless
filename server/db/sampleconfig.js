module.exports = {
  username: 'root',
  password: '',
  database: 'job',
  config: {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
};
