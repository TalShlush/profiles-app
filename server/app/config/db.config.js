
const db_host = process.env.DB_HOST || "localhost"
console.log(`db host - ${process.env.DB_HOST}`)

module.exports = {
  HOST: db_host,
  USER: "postgres",
  PASSWORD: "1234",
  DB: "",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
