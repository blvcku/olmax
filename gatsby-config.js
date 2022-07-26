require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `OLMAX - Roboty ziemne i wyburzenia`,
    description: `Firma OLMAX Damian Strączyński z siedzibą w miejscowości Częstochowa świadczy swoje usługi w branży robót ziemnych, wynajmu sprzętu budowlanego.`,
    keywords: `Roboty ziemne, Koparka, Wyburzenia, Olmax, Transport, Maszyny`,
    siteURL: `https://olmax.pl`,
    facebookURL: `https://www.facebook.com/olmax96/`,
    instagramURL: `https://instagram.com/olmax_damianstr?igshid=YmMyMTA2M2Y=`,
    whatsappURL: `https://api.whatsapp.com/send?phone=48603225338&app=facebook&entry_point=page_cta`,
    copyright: `2022`,
    email: `olmax@interia.pl`,
    phoneNum: `+48 603 225 338`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    `gatsby-plugin-anchor-links`,
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        "accessToken": process.env.GATSBY_CONTENTFUL_API_KEY,
        "spaceId": process.env.GATSBY_CONTENTFUL_SPACE_ID
      }
    }, 
  ]
};