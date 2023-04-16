module.exports = ({ env }) => ({
  url: env("RAILWAY_STATIC_URL", "https://static.railway.app"),
});
