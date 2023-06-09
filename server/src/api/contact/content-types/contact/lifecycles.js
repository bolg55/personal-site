module.exports = {
  async afterCreate(event) {
    const { result } = event;
    console.log("RESULT", result);
    try {
      await strapi.plugins["email"].services.email.send({
        to: "kellen@kellenbolger.ca",
        from: "kellen@kellenbolger.ca",
        subject: `[CONTACT FORM] ${result.subject}`,
        replyTo: result.email,
        text: `New message from ${result.name} (${result.email}):\n\n
        ${result.message}
        `,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
