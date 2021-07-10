module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Kulturgarten Pinneberg",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "y9FPRxe4EFJe5Hu61yUCTB_iwHfQ_OwXPqFScPOHfJE",
        spaceId: "",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
  ],
};
