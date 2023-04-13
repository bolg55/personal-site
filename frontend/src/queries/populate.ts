/** Queries to Strapi API **/

// Retrieve the header data
export const headerQuery = {
  next: { revalidate: 10 },
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
  next: { revalidate: 10 },
  populate: {
    fields: ['brandEmail, brandName'],
    socialLinks: {
      populate: '*',
    },
  },
};

// Retreive Jobs data

export const jobsQuery = {
  next: { revalidate: 10 },
  populate: {
    Jobs: {
      populate: {
        logo: {
          fields: ['url'],
        },
        fields: [
          'title',
          'company',
          'fromDate',
          'toDate',
          'location',
          'overview',
        ],
      },
    },
    resume: {
      fields: ['name', 'url'],
    },
  },
};

// Retrieve about me data
export const aboutQuery = {
  next: { revalidate: 10 },
  populate: {
    image: {
      fields: ['formats.large', 'url', 'alternativeText'],
    },
  },
};
