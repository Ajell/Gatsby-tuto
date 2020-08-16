/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: "Gatsby learning",
    description: "La descriptrion du site ici",
    author: "@johndoe",
    data: ["chose1", "chose2"],
    person: {name: "ahlan", age: 35},
  },
  plugins: [`gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/src/posts/`,
    },
  },
  `gatsby-transformer-sharp`,
   `gatsby-plugin-sharp`,
   {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `bmogzp0i5z05`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: `bRijP7efs12oc2-Hfv2lhHbhEJglBFMEv6umsH6D45A`,
    },
  },
]
}
