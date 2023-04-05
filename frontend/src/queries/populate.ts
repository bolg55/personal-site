/** Queries to Strapi API **/

// Retrieve the header data
export const headerQuery = {
  populate: {
    fields: ['showLogo'],
    Logo: {
      populate: {
        image: {
          fields: ['url'],
        },
      },
    },
    menu: {
      populate: {
        menuItems: {
          fields: ['id', 'url'],
        },
      },
    },
    socialLinks: {
      populate: {
        icon: {
          fields: ['url'],
        },
      },
    },
  },
};
