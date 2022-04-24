module.exports = {
  SITE_METADATA: {
    title: `Kulturgarten Pinneberg`,
    description: "",
    author: `Kulturgarten Pinneberg Verein`,
    siteUrl: process.env.URL || `https://www.kulturgarten-pinneberg.de`,
    keywords: "Garten, Verein, Kulturverein, Pinneberg, Hamburg",
  },
  SITE_LANGUAGE: "de",
  MANIFEST: {
    name: `Kulturgarten Pinneberg`,
    short_name: `KuGaPi`,
    start_url: `/`,
    background_color: `#fff`,
    theme_color: `#eee`,
    display: `minimal-ui`,
    display: `standalone`,
    icon: `src/assets/favicon-32x32.png`,
  },
  ACTIVE_ENV: process.env.NODE_ENV || "development",
};
