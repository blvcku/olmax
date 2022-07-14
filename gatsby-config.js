module.exports = {
  siteMetadata: {
    title: `OLMAX - Roboty ziemne i wyburzenia`,
    description: `Firma OLMAX Damian Strączyński z siedzibą w miejscowości Częstochowa świadczy swoje usługi w branży robót ziemnych, wynajmu sprzętu budowlanego.`,
    keywords: `Roboty ziemne, Koparka, Wyburzenia, Olmax, Transport, Maszyny`,
    siteURL: `https://www.yourdomain.tld`,
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
    "gatsby-plugin-image",
    {
      resolve: 'gatsby-source-contentful',
      options: {
        "accessToken": "5IAyirAmZkF5JfQ4r1oR22DP2cxdQvfgta2l5B69rao",
        "spaceId": "xm3avoai5k6a"
      }
    }, 
  ]
};