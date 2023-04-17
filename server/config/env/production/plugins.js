module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "kellen@kellenbolger.ca",
        defaultReplyTo: "kellen@kellenbolger.ca",
      },
    },
  },
  // ...
});
