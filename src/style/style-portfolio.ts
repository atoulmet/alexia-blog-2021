import { css } from '@emotion/react'
import { ITheme } from './theme'

export const stylePortfolio = (theme: ITheme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 8px;
    font-size: 20px;
    font-weight: 400;
    max-width: 750px;
    line-height: 1.58;
    & strong {
        font-weight: 600;
    }
    .gatsby-resp-image-figure {
        width: 100%;
        & figcaption {
            display: none;
        }
    }
    blockquote {
        margin-left: 0;
    }

    ul {
        margin-top: 8px;
        list-style: none;
        text-align: left;
        width: 100%;

        li {
            display: flex;
            flex-direction: row;
            font-family: ${theme.normalFont};
            padding-bottom: 6px;
            &:before {
                padding-right: 15px;
                content: '•';
                margin-top: 2px;
            }
            & > p {
                margin-bottom: 8px;
            }
        }
    }

    p {
        font-size: 21px;
        line-height: 1.58;
        letter-spacing: -0.003em;
        margin-bottom: 8px;
    }

    a {
        color: black;
        text-decoration-color: ${theme.secondary};
    }
    .gatsby-resp-image-link {
        box-shadow: none;
    }
`
