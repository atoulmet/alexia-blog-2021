module.exports = {
    siteMetadata: {
        title: "Alexia Toulmet's site",
        description: `Hi 👋! I am a fullstack software engineer. When I'm not creating new React components, I am teaching code.`,
        keywords: 'frontend, code, teaching, software',
        siteUrl: 'https://alexiatoulmet.com',
        author: 'Alexia Toulmet',
        authorDetails: {
            name: 'Alexia Toulmet',
            url: 'https://alexiatoulmet.com',
            email: 'alexia.toulmet@gmail.com',
        },
        social: {
            twitter: `https://twitter.com/atoulmet`,
        },
    },
    plugins: [
        'gatsby-plugin-emotion',
        'gatsby-plugin-gatsby-cloud',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-mdx',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        `gatsby-transformer-remark`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 600,
                            withWebp: true,
                            showCaptions: true,
                            quality: 100,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-highlight-code`,
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Suez One`, `Noto Sans`],
                display: 'swap',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/src/content/blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `portfolio`,
                path: `${__dirname}/src/content/portfolio`,
            },
        },
    ],
}
