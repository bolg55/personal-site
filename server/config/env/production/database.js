module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      connectionString: env("DATABASE_URL"),
      host: env("PGHOST", "localhost"),
      port: env.int("PGPORT", 5432),
      database: env("PGDATABASE", "railway"),
      user: env("PGUSER", "postgress"),
      password: env("PGPASSWORD", "password"),
    },
  },
});
