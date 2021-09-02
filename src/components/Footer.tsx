import { Link } from 'gatsby'
import { useTheme, css, keyframes } from '@emotion/react'
import { ITheme } from '../style/theme'
import GithubIcon from '../icons/github'
import LinkedinIcon from '../icons/linkedin'
import TwitterIcon from '../icons/twitter'
import EmailIcon from '../icons/email'

const socialLinks = [
    {
        link: 'https://github.com/atoulmet',
        image: <GithubIcon />,
    },
    {
        link: 'https://twitter.com/atoulmet',
        image: <TwitterIcon />,
    },
    {
        link: 'https://www.linkedin.com/in/alexia-toulmet-55742383/',
        image: <LinkedinIcon />,
    },
    {
        link: 'mailto:alexia.toulmet@gmail.com',
        image: <EmailIcon />,
    },
]

export default function Footer() {
    const theme: ITheme = useTheme()
    const shakeAnimation = keyframes`
        0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
      }
      `

    return (
        <footer
            css={css`
                background-color: black;
                color: white;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 30px 0 60px 0;
            `}
        >
            <h4
                css={css`
                    font-size: 24px;
                    font-family: ${theme.titleFont};
                    position: relative;
                    margin-bottom: 6px;
                    &:after {
                        position: absolute;
                        content: '';
                        height: 3px;
                        border-radius: 3px;
                        bottom: -6px;
                        left: 0;
                        right: 0;
                        background-color: ${theme.secondary};
                    }
                `}
            >
                Let's get in touch
            </h4>
            <div
                css={css`
                    padding: 30px;
                `}
            >
                {socialLinks.map((elem, index) => (
                    <a
                        href={elem.link}
                        key={`item_${index}`}
                        css={css`
                            margin: 0 15px;
                            &:hover > svg {
                                animation: ${shakeAnimation} 0.5s;
                                animation-iteration-count: infinite;
                            }
                        `}
                    >
                        {elem.image}
                    </a>
                ))}
            </div>
        </footer>
    )
}
