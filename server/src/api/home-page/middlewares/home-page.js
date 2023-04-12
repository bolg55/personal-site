"use strict";

/**
 * `home-page` middleware
 */

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    ctx.query.populate = {
      Hero: {
        populate: {
          image: {
            fields: ["formats.large", "url", "alternativeText"],
          },
          buttons: {
            fields: ["label", "url", "isPrimary"],
          },
        },
      },
      projects: {
        populate: {
          img: {
            fields: ["formats.small", "url", "alternativeText"],
          },
        },
      },
      postsSelection: {
        sort: ["publishedAt:desc"],
        limit: 4,
        populate: {
          featuredPosts: {
            populate: {
              fields: ["title", "slug", "excerpt"],
              cover: {
                fields: ["formats.medium", "url", "alternativeText"],
              },
              tags: true,
              seo: true,
            },
          },
        },
      },
    };

    await next();
  };
};
