module.exports = {
  async afterCreate(event) {
    const { result } = event;
    console.log("RESULT", result);
    try {
      await strapi.plugins["email"].services.email.send({
        to: "kellen@kellenbolger.ca",
        from: result.email,
        subject: `[CONTACT FORM] ${result.name}`,
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
