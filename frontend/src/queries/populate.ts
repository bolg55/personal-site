/** Queries to Strapi API **/

// Retrieve the header data
export const headerQuery = {
  cache: 'no-store',
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
  cache: 'no-store',
  populate: {
    Hero: {
      populate: {
        image: {
          fields: ['formats.large', 'url', 'alternativeText'],
        },
        buttons: {
          populate: '*',
        },
      },
    },
    postsSelection: {
      populate: {
        featuredPosts: {
          populate: {
            posts: {
              populate: '*',
            },
          },
        },
      },
    },
    seo: {
      populate: '*',
    },
  },
};

// Retrieve Projects data
export const projectsQuery = {
  next: { revalidate: 10 },
  populate: {
    img: {
      fields: ['formats.small', 'url'],
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
  cache: 'no-store',
  populate: {
    image: {
      fields: ['formats.large', 'url', 'alternativeText'],
    },
  },
};
