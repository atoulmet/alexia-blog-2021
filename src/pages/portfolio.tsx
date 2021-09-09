import { css, useTheme } from '@emotion/react'
import { useState } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import { Layout, Card, CTASection, CTA, PortfolioMarquee } from '../components'
import { ITheme } from '../style/theme'
import { PortfolioProps } from '../types/portfolio'
// @ts-ignore
import calculatorGif from '../images/calculator.gif'

const technologiesIUse = [
    'React',
    'Node',
    'Gasby',
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
    'React',
    'Node',
    'Gasby',
    'Storybook',
    'Express',
    'Next',
    'Mongo',
    'SQL',
    'CSS',
    'CSSAnimations',
    'Bash',
    'Git',
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
            `}
        >
            <PortfolioMarquee />
            <p
                css={css`
                    padding-top: 90px;
                    font-family: ${theme.normalFont};
                    padding-bottom: 32px;
                    font-size: 25px;
                `}
            >
                Here are some things I did in the 4+ years since I’m coding in
                web
            </p>

            <h2
                css={css`
                    text-align: center;
                    padding-bottom: 60px;
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
                        `}
                    >
                        <div
                            css={css`
                                display: flex;
                                flex-direction: row;
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
                                `}
                            >
                                <div
                                    css={css`
                                        font-family: ${theme.normalFont};
                                        font-size: 22px;
                                        display: flex;
                                        justify-content: flex-start;
                                        text-align: left;
                                    `}
                                >
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Fuga ut libero quam sit
                                    quidem ducimus officia? Aperiam recusandae
                                    saepe nisi illo veritatis porro dolorum,
                                    eos, culpa, ratione perspiciatis suscipit
                                    corrupti!
                                </div>
                                {logo && (
                                    <GatsbyImage
                                        image={logo}
                                        objectPosition="center"
                                        alt="blog-post-image"
                                        css={css`
                                            margin-top: 30px;
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
                                        objectPosition="center"
                                        alt="blog-post-image"
                                        css={css`
                                            margin: 30px;
                                            height: 450px;
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
            <CTASection title="I also had the pleasure to be part of other great teams">
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
                        src="../images/kardinal.svg"
                        alt="logo kardinal"
                        height={50}
                        width={100}
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
            </CTASection>

            <h2
                css={css`
                    text-align: center;
                    padding-bottom: 60px;
                    padding-top: 90px;
                `}
            >
                I also teach
            </h2>
            <div
                css={css`
                    display: grid;
                    max-width: 1150px;
                    grid-template-columns: repeat(2, 1fr);
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
                            `}
                        >
                            <div
                                css={css`
                                    display: flex;
                                    flex-direction: row;
                                    padding: ${layout < 3 ? 0 : '30px'};
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
                                    `}
                                >
                                    <div
                                        css={css`
                                            font-family: ${theme.normalFont};
                                            font-size: 22px;
                                            display: flex;
                                            justify-content: flex-start;
                                            text-align: left;
                                        `}
                                    >
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Fuga ut libero quam
                                        sit quidem ducimus officia? Aperiam
                                        recusandae saepe nisi illo veritatis
                                        porro dolorum, eos, culpa, ratione
                                        perspiciatis suscipit corrupti!
                                    </div>
                                    {logoImg && (
                                        <GatsbyImage
                                            image={logoImg}
                                            objectPosition="center"
                                            alt="blog-post-image"
                                            css={css`
                                                margin-top: 30px;
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
                `}
            >
                <Card
                    cssProps={css`
                        grid-column: 1/2;
                        padding: 30px;
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
                    <CTA
                        CTAlabel="Check it out online"
                        CTAlink="https://atoulmet.github.io/calculator/"
                    />
                </Card>
                <Card
                    cssProps={css`
                        grid-column: 2/3;
                        padding: 30px;
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
                    <CTA
                        CTAlabel="Check it out online"
                        CTAlink="https://atoulmet.github.io/calculator/"
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
        <Layout>
            <PortfolioContent data={data} />
        </Layout>
    )
}

export const portfolioQuery = graphql`
    query PortfolioQuery {
        portfolio: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "//portfolio//" } }
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
