import { StaticImage } from 'gatsby-plugin-image'
import Marquee from 'react-fast-marquee'
import { useTheme, css } from '@emotion/react'
import { Layout, Card, CTASection, CTA } from '../components'
import XingFuCat from '../components/XingFuCat'
import Robot from '../icons/robot'
import Terminal from '../icons/terminal'
import { ITheme, hideDotsStyle, highlightTextStyle } from '../style/theme'
import { BlogProps } from '../types/blog'
import { graphql } from 'gatsby'
import BlogPostList from '../components/BlogPostList'

const LanguagesMarquee = ({
    speed = 20,
    direction = 'right',
}: {
    speed: number
    direction?: 'right' | 'left'
}) => (
    <Marquee gradient={false} speed={speed} pauseOnHover direction={direction}>
        <span>
            React · Next · Gatsby · NodeJS · CSS · Redux · Express · Javascript
            · Styled Components · Git · MongoDB · Sass · GraphQL · SQL · NestJS
            · React · Next · Gatsby · NodeJS · CSS · Redux · Express ·
            Javascript · Styled Components · Git · MongoDB · Sass · GraphQL ·
            SQL · NestJS ·
        </span>
    </Marquee>
)

function HomeContent({ data }: BlogProps) {
    const theme: ITheme = useTheme()

    return (
        <main
            css={css`
                padding-bottom: 150px;
            `}
        >
            <div
                css={css`
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    margin: 140px 0;
                    @media (max-width: 1024px) {
                        flex-direction: column;
                        margin: 60px 0 140px 0;
                    }
                    @media (max-width: 600px) {
                        margin: 60px 0 60px 0;
                    }
                `}
            >
                <div
                    css={css`
                        display: flex;
                        flex-direction: column;
                        max-width: 430px;
                        margin-right: 60px;
                        ${hideDotsStyle};
                        @media (max-width: 1024px) {
                            order: 2;
                            margin-right: 0;
                            margin-top: 30px;
                            margin-left: 30px;
                        }
                        @media (max-width: 600px) {
                            width: 70%;
                        }
                    `}
                >
                    <h1>Hello</h1>
                    <h2>
                        <span
                            css={css`
                                font-family: ${theme.normalFont};
                            `}
                        >
                            I'm{' '}
                        </span>
                        Alexia Toulmet
                    </h2>
                    <p
                        css={css`
                            padding-top: 20px;
                            @media (max-width: 1024px) {
                                order: 2;
                                margin-right: 0;
                            }
                        `}
                    >
                        Welcome to{' '}
                        <span
                            css={css`
                                font-family: ${theme.titleFont};
                                ${highlightTextStyle}
                                display: inline-block;
                            `}
                        >
                            my portfolio !
                        </span>
                    </p>
                    <p css={css``}>I’m a software engineer.</p>
                    <p
                        css={css`
                            ${hideDotsStyle};
                        `}
                    >
                        When I'm not busy having fun with code, I'm teaching it
                        !
                    </p>
                </div>
                <div
                    css={css`
                        border-radius: 100%;
                        & img {
                            border-radius: 100%;
                        }
                        margin-left: 60px;
                        position: relative;
                        @media (max-width: 1024px) {
                            margin-left: 0;
                        }
                    `}
                >
                    <StaticImage
                        src="../images/profile-pic.jpg"
                        alt="Alexia Toulmet profile picture"
                        height={300}
                        width={300}
                        css={css`
                            border-radius: 100%;
                            border: solid 10px white;
                        `}
                    />
                    <span
                        css={css`
                            &:after {
                                position: absolute;
                                content: '';
                                width: 300px;
                                height: 300px;
                                border-radius: 100%;
                                bottom: 30px;
                                right: -50px;
                                background-color: ${theme.primary};
                                z-index: -1;
                                @media (max-width: 600px) {
                                    left: -30px;
                                    left: 0px;
                                    top: -30px;
                                }
                            }
                        `}
                    />
                </div>
            </div>
            <div
                css={css`
                    font-family: ${theme.titleFont};
                    font-size: 23px;
                `}
            >
                <LanguagesMarquee speed={20} />
                <LanguagesMarquee speed={20} direction="left" />
                <LanguagesMarquee speed={20} />
            </div>
            <div
                css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding-top: 75px;
                    margin-bottom: 150px;
                    @media (max-width: 600px) {
                        margin-bottom: 60px;
                    }
                `}
            >
                <h2
                    css={css`
                        padding-top: 75px;
                        padding-bottom: 90px;
                        @media (max-width: 600px) {
                            padding-top: 0;
                            padding-bottom: 45px;
                        }
                    `}
                >
                    What I do
                </h2>
                <div
                    css={css`
                        display: flex;
                        flex-direction: row;
                        @media (max-width: 1024px) {
                            flex-direction: column;
                        }
                    `}
                >
                    <Card
                        cssProps={css`
                            padding: 60px 30px;
                            width: 400px;
                            @media (max-width: 1200px) {
                                width: 350px;
                            }
                            @media (max-width: 1024px) {
                                margin-bottom: 60px;
                            }
                            @media (max-width: 500px) {
                                width: 70%;
                                align-self: center;
                            }

                            &h3 {
                                text-decoration: underline;
                            }
                        `}
                    >
                        <Robot />

                        <h3
                            css={css`
                                padding: 30px 0;
                            `}
                        >
                            Coding
                        </h3>
                        <p>
                            For more than 4 years now, I've been developping
                            websites. Even though I don't have any problem
                            getting my hand dirty with any language, I love
                            coding in React.
                        </p>
                    </Card>
                    <Card
                        cssProps={css`
                            padding: 60px 30px;
                            width: 400px;
                            @media (max-width: 1200px) {
                                width: 350px;
                            }
                            @media (max-width: 500px) {
                                width: 70%;
                                align-self: center;
                            }

                            &h3 {
                                text-decoration: underline;
                            }
                        `}
                    >
                        <Terminal />
                        <h3
                            css={css`
                                padding: 30px 0;
                            `}
                        >
                            Teaching
                        </h3>
                        <p>
                            The main reason why I decided to become a freelancer
                            was to have more time available for teaching. I love
                            creating online courses, but also teach it face to
                            face.
                        </p>
                    </Card>
                </div>
            </div>
            <CTASection
                title="I collaborate with great companies"
                CTAlink="/portfolio"
                CTAlabel="See more of my work"
            >
                <Marquee gradient={false} direction="left" pauseOnHover>
                    <div
                        css={css`
                            display: flex;
                            align-items: center;
                        `}
                    >
                        <StaticImage
                            src="../images/payfit.png"
                            alt="logo payfit"
                            height={150}
                            css={css`
                                margin: 60px;
                            `}
                        />

                        <StaticImage
                            src="../images/OClogo.jpeg"
                            alt="logo open classrooms"
                            height={100}
                            css={css`
                                margin: 60px;
                            `}
                        />
                        <StaticImage
                            src="../images/scpo.png"
                            alt="logo sciences po"
                            width={250}
                            css={css`
                                margin: 60px;
                            `}
                        />
                        <StaticImage
                            src="../images/agorastore.png"
                            alt="logo agorastore"
                            height={75}
                            css={css`
                                margin: 60px;
                            `}
                        />
                        <StaticImage
                            src="../images/emlyon.png"
                            alt="logo em lyon"
                            height={100}
                            css={css`
                                margin: 60px;
                            `}
                        />
                    </div>
                </Marquee>
            </CTASection>

            <div
                css={css`
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    padding-bottom: 60px;
                `}
            >
                <h3
                    css={css`
                        padding: 60px;
                    `}
                >
                    I also write
                </h3>
                <BlogPostList posts={data.blog.posts} />
                <CTA CTAlink="/blog" CTAlabel="See my blog posts"></CTA>
            </div>
            <CTASection
                title="And love having fun with CSS"
                CTAlink="/portfolio"
                CTAlabel="See my portfolio"
            >
                <XingFuCat />
            </CTASection>
        </main>
    )
}

const IndexPage = (props: BlogProps) => {
    return (
        <Layout layoutTitle={'Alexia Toulmet - Home'}>
            <HomeContent {...props} />
        </Layout>
    )
}

export default IndexPage

export const blogListQuery = graphql`
    query {
        blog: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "//blog//" } }
        ) {
            posts: nodes {
                fields {
                    slug
                }
                frontmatter {
                    date
                    title
                    duration
                    cover_image {
                        childImageSharp {
                            gatsbyImageData(
                                width: 800
                                height: 250
                                placeholder: BLURRED
                                transformOptions: {
                                    fit: COVER
                                    cropFocus: CENTER
                                }
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
                excerpt
                id
            }
        }
    }
`
