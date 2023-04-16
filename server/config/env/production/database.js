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
      ssl: env.bool("DATABASE_SSL", false) && {
        key: env("DATABASE_SSL_KEY", undefined),
        cert: env("DATABASE_SSL_CERT", undefined),
        ca: env("DATABASE_SSL_CA", undefined),
        capath: env("DATABASE_SSL_CAPATH", undefined),
        cipher: env("DATABASE_SSL_CIPHER", undefined),
        rejectUnauthorized: env.bool("DATABASE_SSL_REJECT_UNAUTHORIZED", true),
      },
      schema: env("DATABASE_SCHEMA", "public"),
    },
    pool: {
      min: env.int("DATABASE_POOL_MIN", 2),
      max: env.int("DATABASE_POOL_MAX", 10),
    },
  },
});
