module.exports = ({ env }) => ({
  url: env(
    "RAILWAY_STATIC_URL",
    "https://portfolio-production-14e3.up.railway.app"
  ),
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),

  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
