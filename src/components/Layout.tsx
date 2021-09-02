import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from '@emotion/react'
import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'
// import { getAsset } from '../utils/fileManagement'
import { Header, Footer } from './'
import { theme, globalStyle } from '../style/theme'

interface StaticQueryProps {
    site: {
        siteMetadata: {
            title: string
            description: string
            keywords: string
            author: string
            siteUrl: string
        }
    }
}

interface StaticQueryProps {
    site: {
        siteMetadata: {
            title: string
            description: string
            keywords: string
            author: string
            siteUrl: string
        }
    }
}

const Layout: React.FC = ({ children }) => {
    return (
        <StaticQuery
            query={graphql`
                query IndexLayoutQuery {
                    site {
                        siteMetadata {
                            title
                            description
                            keywords
                            author
                            keywords
                            siteUrl
                        }
                    }
                }
            `}
            render={(data: StaticQueryProps) => {
                const { title, description, keywords, author, siteUrl } =
                    data.site.siteMetadata
                // const ogImage = getAsset('meta-image')
                // const staticImg = `${siteUrl}${ogImage.childImageSharp.fluid.src}`
                const meta = [
                    {
                        name: `description`,
                        content: description,
                    },
                    {
                        property: `og:title`,
                        content: title,
                    },
                    {
                        property: `og:description`,
                        content: description,
                    },
                    {
                        property: `og:type`,
                        content: `website`,
                    },
                    {
                        property: 'og:logo',
                        // content: staticImg,
                    },
                    {
                        property: 'og:image',
                        // content: staticImg,
                    },
                    {
                        property: 'image',
                        // content: staticImg,
                    },
                    {
                        name: `twitter:card`,
                        content: `summary`,
                    },
                    {
                        name: `twitter:creator`,
                        content: author,
                    },
                    {
                        name: `twitter:title`,
                        content: title,
                    },
                    {
                        name: `twitter:description`,
                        content: description,
                    },
                    {
                        name: 'twitter:image',
                        // content: staticImg,
                    },
                ]
                return (
                    <div>
                        <Helmet
                            htmlAttributes={{
                                lang: 'en',
                            }}
                            link={[
                                {
                                    rel: 'canonical',
                                    href: siteUrl,
                                },
                            ]}
                            meta={meta}
                            title={data.site.siteMetadata.title}
                            titleTemplate={title}
                        >
                            <meta charSet="utf-8" />
                            <link
                                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Press+Start+2P&family=Source+Sans+Pro&display=swap"
                                rel="stylesheet"
                            />
                            {meta.map((elem, id) => (
                                <meta
                                    key={id}
                                    name={elem.name}
                                    content={elem.content}
                                />
                            ))}
                            {/* <meta name="og:image" content={staticImg} /> */}
                            <meta name="robots" content="all" />
                            <meta name="keywords" content={keywords} />
                        </Helmet>
                        <ThemeProvider theme={theme}>
                            <Global
                                styles={css`
                                    div {
                                    }
                                    ${emotionReset}
                                `}
                            />
                            <Global styles={globalStyle} />
                            <Header />
                            {children}
                            <Footer />
                        </ThemeProvider>
                    </div>
                )
            }}
        />
    )
}

export default Layout
