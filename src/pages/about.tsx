import { StaticImage } from 'gatsby-plugin-image'
import { useTheme, css, keyframes } from '@emotion/react'
import { Layout, Card, CTASection } from '../components'
import Hi from '../icons/hi'
import { ITheme, highlightTitleStyle } from '../style/theme'

function About() {
    const theme: ITheme = useTheme()
    const hiAnimation = keyframes`
        0% {transform: rotate(0deg);}
        100% {transform: rotate(10deg);}
    `
    return (
        <Layout layoutTitle={'Alexia Toulmet - About'}>
            <div
                css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin: 0 90px 30px 90px;
                    & strong {
                        font-weight: 600;
                    }
                    @media (max-width: 1024px) {
                        margin: 0 0 30px 0;
                        overflow: hidden;
                    }
                `}
            >
                <div
                    css={css`
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding-top: 100px;
                        width: 600px;
                    `}
                >
                    <div
                        css={css`
                            position: absolute;
                            z-index: 1;
                            top: 0;
                            right: 0;
                            @media (max-width: 600px) {
                                right: 30px;
                            }
                            & > svg {
                                animation: ${hiAnimation} 2s steps(2) infinite
                                    none;
                            }
                        `}
                    >
                        <Hi />
                    </div>
                    <StaticImage
                        src="../images/profile-pic.jpg"
                        alt="Alexia Toulmet profile picture"
                        height={300}
                        width={300}
                        css={css`
                            border-radius: 100%;
                            & img {
                                border-radius: 100%;
                            }
                            border: solid 10px white;
                        `}
                    />
                </div>
                <div
                    css={css`
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        max-width: 400px;
                        padding: 30px;
                        padding-bottom: 100px;
                    `}
                >
                    <h3
                        css={css`
                            font-family: ${theme.titleFont};
                            ${highlightTitleStyle}
                            max-width: 150px;
                            padding-bottom: 16px;
                            &:after {
                                height: 18px;
                            }
                        `}
                    >
                        👋 Hi there !
                    </h3>
                    <p
                        css={css`
                            text-align: center;
                        `}
                    >
                        I’m Alexia Toulmet, and I work as a{' '}
                        <strong>software engineer</strong>. But let’s get into
                        more details.
                    </p>
                </div>

                <Card
                    cssProps={css`
                        text-align: left;
                        align-items: flex-start;
                        padding: 30px;
                        margin-bottom: 90px;
                        max-width: 800px;
                        & h3 {
                            padding-bottom: 16px;
                        }
                    `}
                >
                    <h3>Background</h3>
                    <p>
                        I graduated from <strong>Sciences Po Paris</strong> in
                        2016 in Public Affairs, and decided right away I wanted
                        to start coding. I wanted to create things on my own. I{' '}
                        <strong>learned C at 42</strong>, and discovered web
                        development in 2017 (still at 42). I fell in love with{' '}
                        <strong>JavaScript, especially React</strong>. I got my
                        first coding experience at <strong>PayFit</strong>.
                        After a super fulfilling year, I decided to become a{' '}
                        <strong>freelancer</strong>.
                    </p>
                </Card>

                <Card
                    cssProps={css`
                        text-align: left;
                        align-items: flex-start;
                        padding: 30px;
                        margin-bottom: 90px;
                        max-width: 800px;
                        & h3 {
                            padding-bottom: 16px;
                        }
                    `}
                >
                    <h3>Why Freelancing ?</h3>
                    <p>
                        Because it is the best way to split my time between
                        <strong>
                            coding, teaching and my other side projects
                        </strong>
                        . I love taking part in coding projects, be part of
                        developper teams, and ship new features... But it is
                        also really important to{' '}
                        <strong>share what I learn</strong> through teaching.{' '}
                    </p>
                </Card>

                <Card
                    cssProps={css`
                        text-align: left;
                        align-items: flex-start;
                        padding: 30px;
                        margin-bottom: 90px;
                        max-width: 800px;
                        & h3 {
                            padding-bottom: 16px;
                        }
                    `}
                >
                    <h3>...And beside coding and teaching ?</h3>
                    <p>
                        Beside coding and teaching, I’m{' '}
                        <strong>passionate about East Asia</strong>. I lived in
                        Taipei for a year, and in Beijing for 6 months, where
                        <strong> I learned to speak Chinese (大家好 👋)</strong>
                        , and I keep studying it. I’m weird, but I definitely
                        prefer the traditional characters. Since then, I take
                        every opportuniy to{' '}
                        <strong>
                            stay connected to this part of the world
                        </strong>{' '}
                        - travelling there, eating asian food (/ bubble tea 💜),
                        watching taiwanese, korean or japanese movies, and
                        reading books that send me back there.
                    </p>
                </Card>
            </div>
            <div
                css={css`
                    padding-bottom: 60px;
                `}
            >
                <CTASection
                    title="You want to see what I do?"
                    CTAlink="/portfolio"
                    CTAlabel="See my portfolio"
                />
            </div>
        </Layout>
    )
}

export default About
