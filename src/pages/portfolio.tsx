import { css, useTheme } from '@emotion/react'
import { useState } from 'react'
import { graphql } from 'gatsby'
import Marquee from 'react-fast-marquee'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import { Layout, Card, CTASection, CTA, PortfolioMarquee } from '../components'
import { ITheme } from '../style/theme'
import { PortfolioProps } from '../types/portfolio'
// @ts-ignore
import calculatorGif from '../images/calculator.gif'
import redTetrisGif from '../images/redtetris.gif'
import XingFuCat from '../components/XingFuCat'

const technologiesIUse = [
    'React',
    'Node',
    'Gatsby',
    'Storybook',
    'Express',
    'Next',
    'Mongo',
    'SQL',
    'CSS',
    'CSSAnimations',
    'Bash',
    'Git',
    'Redux',
    'GraphQL',
]

function AnimatedSkills() {
    const theme: ITheme = useTheme()

    const [random1, setRandom1] = useState(0)
    const [random2, setRandom2] = useState(0)

    return (
        <div
            css={css`
                display: flex;
                flex-wrap: wrap;
                max-width: 1000px;
                justify-content: center;
                margin-top: 30px;
            `}
        >
            {technologiesIUse.map((tech, index) => (
                <div
                    key={`${tech}_${index}`}
                    css={css`
                        padding: 0 30px 30px 0;
                        cursor: pointer;
                        &:hover {
                            transform: translate(${random1}px, ${random2}px);
                        }
                    `}
                >
                    <div
                        onMouseOver={() => {
                            setRandom1(Math.floor(Math.random() * 20) - 10)
                            setRandom2(Math.floor(Math.random() * 20) - 10)
                        }}
                        css={css`
                            background-color: white;
                            border: solid 3px black;
                            padding: 12px;
                            font-size: 20px;
                            font-family: ${theme.titleFont};
                            &:hover {
                                transform: translate(
                                    ${random1}px,
                                    ${random2}px
                                );
                            }
                        `}
                    >
                        {tech}
                    </div>
                </div>
            ))}
        </div>
    )
}

function PortfolioContent({ data }: PortfolioProps) {
    const theme: ITheme = useTheme()
    const commercialProjects = data.portfolio.projects.filter(
        (item) => item.frontmatter.type === 'commercial'
    )
    const teachingProjects = data.portfolio.projects.filter(
        (item) => item.frontmatter.type === 'teaching'
    )

    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 90px;
                width: 100%;
                @media (max-width: 800px) {
                    margin-top: 60px;
                }
            `}
        >
            <PortfolioMarquee />
            <p
                css={css`
                    padding-top: 90px;
                    font-family: ${theme.normalFont};
                    padding-bottom: 32px;
                    font-size: 25px;
                    @media (max-width: 800px) {
                        padding-top: 30px;
                    }
                    @media (max-width: 600px) {
                        padding: 0 15px;
                        padding-bottom: 30px;
                        font-size: 20px;
                    }
                `}
            >
                Here are some things I did for the 4+ years since I’m coding in
                web
            </p>

            <h2
                css={css`
                    text-align: center;
                    padding-bottom: 60px;
                    @media (max-width: 600px) {
                        padding-bottom: 30px;
                    }
                `}
            >
                Commercial coding
            </h2>
            {commercialProjects.map(({ id, frontmatter }) => {
                const logo = getImage(frontmatter.logo.childImageSharp)
                const cover = getImage(frontmatter.cover_image.childImageSharp)

                const { ctaLink } = frontmatter

                return (
                    <Card
                        key={id}
                        cssProps={css`
                            display: flex;
                            flex-direction: column;
                            max-width: 1150px;
                            margin-bottom: 60px;
                            @media (max-width: 800px) {
                                margin: 0 30px 30px 30px;
                            }
                        `}
                    >
                        <div
                            css={css`
                                display: flex;
                                flex-direction: row;
                                @media (max-width: 800px) {
                                    flex-direction: column;
                                }
                            `}
                        >
                            <div
                                css={css`
                                    order: ${frontmatter.layout === 1 ? 1 : 2};
                                    flex: 1;
                                    flex-direction: column;
                                    padding: 30px;
                                    display: flex;
                                    justify-content: center;
                                    ${frontmatter.layout === 1
                                        ? 'padding-right: 0'
                                        : 'padding-left: 0'};
                                    @media (max-width: 800px) {
                                        padding: 30px;
                                        ${frontmatter.layout === 1
                                            ? 'padding-bottom: 0'
                                            : 'padding-top: 0'};
                                    }
                                `}
                            >
                                <div
                                    css={css`
                                        font-family: ${theme.normalFont};
                                        font-size: 20px;
                                        line-height: 30px;
                                        display: flex;
                                        justify-content: flex-start;
                                        text-align: left;
                                        @media (max-width: 800px) {
                                            text-align: center;
                                        }
                                    `}
                                >
                                    {frontmatter.content}
                                </div>
                                {logo && (
                                    <GatsbyImage
                                        image={logo}
                                        // objectPosition="center"
                                        alt="blog-post-image"
                                        css={css`
                                            margin-top: 20px;
                                            @media (max-width: 800px) {
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                                align-self: center;
                                            }
                                        `}
                                    />
                                )}
                            </div>
                            <div
                                css={css`
                                    flex: 2;
                                    order: ${frontmatter.layout === 1 ? 2 : 1};
                                `}
                            >
                                {cover && (
                                    <GatsbyImage
                                        image={cover}
                                        objectPosition={
                                            frontmatter.title ===
                                            'Components Library'
                                                ? 'left'
                                                : 'center'
                                        }
                                        alt="blog-post-image"
                                        css={css`
                                            margin: 30px;
                                            height: 450px;
                                            @media (max-width: 800px) {
                                                height: 300px;
                                            }
                                        `}
                                    />
                                )}
                            </div>
                        </div>
                        {ctaLink && (
                            <div
                                css={css`
                                    margin-bottom: 30px;
                                    & button {
                                        width: 400px;
                                        @media (max-width: 800px) {
                                            width: unset;
                                        }
                                    }
                                `}
                            >
                                <CTA
                                    CTAlabel="Check it out online"
                                    CTAlink={ctaLink}
                                />
                            </div>
                        )}
                    </Card>
                )
            })}
            <div
                css={css`
                    @media (max-width: 800px) {
                        padding-bottom: 60px;
                    }
                `}
            />
            <CTASection title="I had the pleasure to be part of great teams">
                <Marquee gradient={false} speed={20}>
                    <div
                        css={css`
                            display: flex;
                            flex-direction: row;
                        `}
                    >
                        <StaticImage
                            src="../images/payfit.png"
                            alt="logo payfit"
                            height={100}
                            css={css`
                                margin: 60px;
                            `}
                        />
                        <StaticImage
                            src="../images/kardinal.png"
                            alt="logo kardinal"
                            width={300}
                            height={100}
                            css={css`
                                margin: 60px;
                            `}
                        />
                        <StaticImage
                            src="../images/peyce.png"
                            alt="logo peyce"
                            height={100}
                            css={css`
                                margin: 60px;
                            `}
                        />
                        <StaticImage
                            src="../images/agorastore.png"
                            alt="logo agorastore"
                            height={100}
                            css={css`
                                margin: 60px;
                            `}
                        />
                        <StaticImage
                            src="../images/solypse.png"
                            alt="logo solypse"
                            height={100}
                            css={css`
                                margin: 60px;
                            `}
                        />
                    </div>
                </Marquee>
            </CTASection>

            <h2
                css={css`
                    text-align: center;
                    padding-bottom: 60px;
                    padding-top: 90px;
                    @media (max-width: 800px) {
                        padding-top: 60px;
                        padding-bottom: 30px;
                    }
                `}
            >
                I also teach
            </h2>
            <div
                css={css`
                    display: grid;
                    max-width: 1150px;
                    grid-template-columns: repeat(2, 1fr);
                    @media (max-width: 800px) {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        margin-bottom: 60px;
                    }
                `}
            >
                {teachingProjects.map((project) => {
                    const { cover_image, ctaLink, layout, logo } =
                        project.frontmatter
                    const logoImg = getImage(logo.childImageSharp)
                    const cover = getImage(cover_image.childImageSharp)
                    return (
                        <Card
                            key={project.id}
                            cssProps={css`
                                display: flex;
                                align-items: center;
                                flex-direction: column;
                                max-width: 1150px;
                                margin-bottom: 60px;
                                grid-column: ${layout < 3
                                    ? '1 / 3'
                                    : layout === 3
                                    ? '1 / 2'
                                    : '2 / 3'};
                                @media (max-width: 800px) {
                                    grid-column: unset;
                                    margin-bottom: 60px;
                                    margin: 0 30px;
                                }
                                @media (max-width: 600px) {
                                    margin-bottom: 30px;
                                }
                            `}
                        >
                            <div
                                css={css`
                                    display: flex;
                                    flex-direction: row;
                                    padding: ${layout < 3 ? 0 : '30px'};
                                    @media (max-width: 800px) {
                                        flex-direction: column;
                                    }
                                `}
                            >
                                <div
                                    css={css`
                                        order: ${layout === 1 ? 1 : 2};
                                        flex: 1;
                                        flex-direction: column;
                                        padding: 30px;
                                        display: flex;
                                        justify-content: center;
                                        ${layout === 1
                                            ? 'padding-right: 0'
                                            : 'padding-left: 0'};
                                        @media (max-width: 800px) {
                                            align-items: center;
                                            padding: 0 30px 0 30px;
                                        }
                                    `}
                                >
                                    <div
                                        css={css`
                                            font-family: ${theme.normalFont};
                                            font-size: 20px;
                                            line-height: 30px;
                                            display: flex;
                                            justify-content: flex-start;
                                            text-align: left;
                                        `}
                                    >
                                        {project.frontmatter.content}
                                    </div>
                                    {logoImg && (
                                        <GatsbyImage
                                            image={logoImg}
                                            objectPosition="center"
                                            alt="blog-post-image"
                                            css={css`
                                                margin-top: 30px;
                                                @media (max-width: 800px) {
                                                    margin-bottom: 30px;
                                                }
                                            `}
                                        />
                                    )}
                                </div>
                                {cover && layout < 3 && (
                                    <div
                                        css={css`
                                            flex: 2;
                                            order: ${layout === 1 ? 2 : 1};
                                        `}
                                    >
                                        <GatsbyImage
                                            image={cover}
                                            objectPosition="center"
                                            alt="blog-post-image"
                                            css={css`
                                                margin: 30px;
                                                height: 450px;
                                                @media (max-width: 800px) {
                                                    height: 300px;
                                                }
                                            `}
                                        />
                                    </div>
                                )}
                            </div>
                            {ctaLink && (
                                <div
                                    css={css`
                                        margin-bottom: 30px;
                                        & button {
                                            width: 400px;
                                            @media (max-width: 800px) {
                                                width: unset;
                                            }
                                        }
                                    `}
                                >
                                    <CTA
                                        CTAlabel="Check it out online"
                                        CTAlink={ctaLink}
                                    />
                                </div>
                            )}
                        </Card>
                    )
                })}
            </div>
            <CTASection
                title="You want to see what I teach ?"
                CTAlabel="Discover my last course"
                CTAlink="https://openclassrooms.com/fr/courses/7008001-debutez-avec-react"
            />
            <h2
                css={css`
                    text-align: center;
                    padding-bottom: 60px;
                    padding-top: 90px;
                    @media (max-width: 800px) {
                        padding-top: 60px;
                        padding-bottom: 60px;
                    }
                `}
            >
                And have fun with code
            </h2>
            <div
                css={css`
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    max-width: 1150px;
                    padding-bottom: 90px;
                    @media (max-width: 800px) {
                        grid-template-columns: 1fr;
                    }
                `}
            >
                <Card
                    cssProps={css`
                        grid-column: 1/2;
                        padding: 30px;

                        @media (max-width: 800px) {
                            grid-column: unset;
                            margin: 0 30px;
                            margin-bottom: 60px;
                        }
                        @media (max-width: 600px) {
                            margin-bottom: 30px;
                        }
                    `}
                >
                    <img
                        src={calculatorGif}
                        css={css`
                            object-fit: cover;
                            width: 100%;
                            max-height: 100%;
                            margin-bottom: 30px;
                        `}
                    />
                    <div
                        css={css`
                            margin-bottom: 20px;
                            font-size: 20px;
                        `}
                    >
                        A simple Calculator with vintage design I created 🤓
                    </div>
                    <CTA
                        CTAlabel="Check it out online"
                        CTAlink="https://atoulmet.github.io/calculator/"
                    />
                </Card>
                <Card
                    cssProps={css`
                        grid-column: 2/3;
                        padding: 30px;

                        @media (max-width: 800px) {
                            grid-column: unset;
                            margin-bottom: 30px;
                            margin: 0 30px;
                        }
                    `}
                >
                    <XingFuCat />
                    <div
                        css={css`
                            margin-bottom: 20px;
                            font-size: 20px;
                        `}
                    >
                        I love CSS animations, and try it out on CodePen !
                    </div>
                    <CTA
                        CTAlabel="Check my CodePen"
                        CTAlink="https://codepen.io/atoulmet/pen/QWEVqev"
                    />
                </Card>
                <Card
                    cssProps={css`
                        grid-column: 2/3;
                        padding: 30px;
                        /* background-color: #070c14; */

                        margin-top: 64px;
                        @media (max-width: 800px) {
                            grid-column: unset;
                            margin-bottom: 30px;
                            margin: 0 30px;
                        }
                    `}
                >
                    <img
                        src={redTetrisGif}
                        css={css`
                            object-fit: cover;
                            width: 100%;
                            max-height: 100%;
                            margin-bottom: 30px;
                        `}
                    />
                    <div
                        css={css`
                            margin-bottom: 20px;
                            font-size: 20px;
                        `}
                    >
                        We had to code an online tetris at 42. No design was
                        required, but it was the perfect opportunity to have fun
                        with 80s design classics
                    </div>
                    <CTA
                        CTAlabel="Give it a try"
                        CTAlink="https://atoulmet-red-tetris.herokuapp.com/"
                    />
                </Card>
            </div>
            <CTASection title="The technologies I use">
                <AnimatedSkills />
            </CTASection>
        </div>
    )
}

export default function Portfolio({ data }: PortfolioProps) {
    return (
        <Layout layoutTitle={'Alexia Toulmet - Portfolio'}>
            <PortfolioContent data={data} />
        </Layout>
    )
}

export const portfolioQuery = graphql`
    query PortfolioQuery {
        portfolio: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "//portfolio//" } }
            sort: { fields: [frontmatter___order], order: DESC }
        ) {
            projects: nodes {
                fields {
                    slug
                }
                frontmatter {
                    date
                    title
                    layout
                    type
                    ctaLink
                    content
                    order
                    cover_image {
                        childImageSharp {
                            gatsbyImageData(
                                height: 450
                                placeholder: BLURRED
                                transformOptions: {
                                    fit: COVER
                                    cropFocus: CENTER
                                }
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                    logo {
                        childImageSharp {
                            gatsbyImageData(
                                width: 200
                                layout: FIXED
                                placeholder: BLURRED

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
