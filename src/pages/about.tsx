import { StaticImage, IImage } from 'gatsby-plugin-image'
import { useTheme, css } from '@emotion/react'
import { Layout, Card, CTASection } from '../components'
import Hi from '../icons/hi'
import { ITheme, hideDotsStyle, highlightTitleStyle } from '../style/theme'

function About() {
    const theme: ITheme = useTheme()

    return (
        <Layout>
            <div
                css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin: 0 90px 30px 90px;
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
                        I’m Alexia Toulmet, and I work as a fullstack software
                        engineer. But let’s get into more details.
                    </p>
                </div>

                <Card
                    cssProps={css`
                        text-align: left;
                        align-items: flex-start;
                        padding: 30px;
                        margin-bottom: 90px;
                        & h3 {
                            padding-bottom: 16px;
                        }
                    `}
                >
                    <h3>Background</h3>
                    <p>
                        I graduated from Sciences Po Paris in 2016 in Public
                        Affairs, and decided right away I wanted to start
                        coding. I wanted to create things on my own. I learned C
                        at 42, and discovered web development in 2017 (still at
                        42). I fell in love with JavaScript, especially React. I
                        got my first coding experience at PayFit. After a super
                        fulfilling year, I decided to become a freelancer.
                    </p>
                </Card>

                <Card
                    cssProps={css`
                        text-align: left;
                        align-items: flex-start;
                        padding: 30px;
                        margin-bottom: 90px;
                        & h3 {
                            padding-bottom: 16px;
                        }
                    `}
                >
                    <h3>Background</h3>
                    <p>
                        I graduated from Sciences Po Paris in 2016 in Public
                        Affairs, and decided right away I wanted to start
                        coding. I wanted to create things on my own. I learned C
                        at 42, and discovered web development in 2017 (still at
                        42). I fell in love with JavaScript, especially React. I
                        got my first coding experience at PayFit. After a super
                        fulfilling year, I decided to become a freelancer.
                    </p>
                </Card>

                <Card
                    cssProps={css`
                        text-align: left;
                        align-items: flex-start;
                        padding: 30px;
                        margin-bottom: 90px;
                        & h3 {
                            padding-bottom: 16px;
                        }
                    `}
                >
                    <h3>...And beside coding and teaching ?</h3>
                    <p>
                        Beside coding and teaching, I’m passionate about East
                        Asia. I lived in Taipei for a year, and in Beijing for 6
                        months, where I learned to speak Chinese (大家好 👋).
                        I’m weird, but I definitely prefer the traditional
                        characters. Since then, I take every opportuniy to stay
                        connected to this part of the world - travelling there,
                        eating asian food (/ bubble tea 💜), watching taiwanese,
                        korean or japanese movies, and reading books that send
                        me back there.
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
