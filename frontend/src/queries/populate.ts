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
          fields: ['id', 'url', 'label'],
        },
      },
    },
    socialLinks: {
      populate: {
        iconName: {
          fields: ['url'],
        },
      },
    },
  },
};

// Retrieve the footer data
export const footerQuery = {
  populate: {
    fields: ['brandEmail, brandName'],
    socialLinks: {
      populate: '*',
    },
  },
};

// Retrieve the home page data
export const homeQuery = {
  populate: {
    Hero: {
      populate: '*',
    },
    seo: {
      populate: '*',
    },
  },
};
