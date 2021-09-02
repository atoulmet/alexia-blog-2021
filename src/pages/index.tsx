import { StaticImage, IImage } from 'gatsby-plugin-image'
import Marquee from 'react-fast-marquee'
import { useTheme, css } from '@emotion/react'
import { Layout, Card, CTASection, CTA } from '../components'
import XingFuCat from '../components/XingFuCat'
import Robot from '../icons/robot'
import Terminal from '../icons/terminal'
import { ITheme, hideDotsStyle, highlightTextStyle } from '../style/theme'

// interface IndexPageProps {}

const LanguagesMarquee = ({
    speed = 20,
    direction = 'right',
}: {
    speed: number
    direction?: 'right' | 'left'
}) => (
    <Marquee gradient={false} speed={speed} pauseOnHover direction={direction}>
        <span>
            React . Next . Gatsby. NodeJS . CSS . Redux . Express . Javascript .
            Styled Components . Git . MongoDB . Sass . GraphQL . SQL . NestJS .
            React . Next . Gatsby. NodeJS . CSS . Redux . Express . Javascript .
            Styled Components . Git . MongoDB . Sass . GraphQL . SQL . NestJS
        </span>
    </Marquee>
)

function HomeContent() {
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
                `}
            >
                <div
                    css={css`
                        display: flex;
                        flex-direction: column;
                        max-width: 430px;
                        margin-right: 60px;
                        ${hideDotsStyle};
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
                    <p css={css``}>I’m a fullstack software engineer.</p>
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
                        margin-left: 60px;

                        position: relative;
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
                `}
            >
                <h2
                    css={css`
                        padding-top: 75px;
                        padding-bottom: 90px;
                    `}
                >
                    What I do
                </h2>
                <div
                    css={css`
                        display: flex;
                        flex-direction: row;
                    `}
                >
                    <Card width={400}>
                        <Robot />

                        <h3
                            css={css`
                                padding: 30px 0;
                            `}
                        >
                            Teaching
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua, Ut enim ad minim veniam
                        </p>
                    </Card>
                    <Card width={400}>
                        <Terminal />
                        <h3
                            css={css`
                                padding: 30px 0;
                            `}
                        >
                            Coding
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua, Ut enim ad minim veniam
                        </p>
                    </Card>
                </div>
            </div>
            <CTASection
                title="I collaborate with great companies"
                CTAlink="/portfolio"
                CTAlabel="See more of my projects"
            >
                <Marquee gradient={false} direction="left">
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

            <div>
                <h3>I also write</h3>
                <CTA CTAlink="/blog" CTAlabel="See my blog posts"></CTA>
            </div>
            <CTASection
                title="And love having fun with code"
                CTAlink="/portfolio"
                CTAlabel="See my portfolio"
            >
                <XingFuCat />
            </CTASection>
        </main>
    )
}

const IndexPage = () => {
    return (
        <Layout>
            <HomeContent />
        </Layout>
    )
}

export default IndexPage