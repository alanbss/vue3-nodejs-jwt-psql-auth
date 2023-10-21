module.exports = {
  HOST: "localhost",
  USER: "abs",
  PASSWORD: "252610",
  DB: "test_db",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};