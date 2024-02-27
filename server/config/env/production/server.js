module.exports = ({ env }) => ({
  url: env(`https://${RAILWAY_STATIC_URL}`, `http://${RAILWAY_STATIC_URL}`),
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),

  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
