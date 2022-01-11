import { css } from '@emotion/react'

export interface ITheme {
    primary?: string
    secondary?: string
    titleFont?: string
    normalFont?: string
}

export const theme = {
    primary: '#B6E8E7',
    secondary: '#3CBEBC',
    titleFont: `'Suez One', serif`,
    normalFont: `'Noto Sans', serif`,
}

export const hideDotsStyle = css(`
    text-shadow: -3px -3px 0 #fff, 3px -3px 0 #fff, -3px 3px 0 #fff,
        3px 3px 0 #fff;
`)

export const highlightTextStyle = css`
    position: relative;
    white-space: nowrap;
    display: flex;
    text-shadow: none;
    &:after {
        position: absolute;
        left: 0;
        content: '';
        width: 100%;
        height: 16px;
        background-color: ${theme.primary};
        z-index: -1;
        transform: translateX(10px);
    }
`

export const highlightTitleStyle = css`
    position: relative;
    white-space: nowrap;
    display: flex;
    text-shadow: none;
    &:after {
        position: absolute;
        left: 0;
        content: '';
        width: 100%;
        height: 30px;
        background-color: ${theme.primary};
        z-index: -1;
        transform: translateX(10px);
    }
`

export const globalStyle = css`
    body {
        background-color: white;
        background-image: radial-gradient(#000 5%, transparent 2%),
            radial-gradient(#000 5%, transparent 2%);
        background-size: 16px 16px;
        background-position: 0 0, 8px 8px;
        background-repeat: repeat;
        font-family: ${theme.normalFont};
    }

    h1 {
        font-size: 40px;
        font-family: ${theme.titleFont};
        line-height: 55px;
    }

    h2 {
        font-size: 40px;
        font-family: ${theme.titleFont};
        line-height: 55px;
        @media (max-width: 600px) {
            font-size: 30px;
        }
    }

    h3 {
        font-size: 25px;
        font-family: ${theme.titleFont};
        line-height: 30px;
    }
    p {
        font-size: 20px;
        line-height: 26px;
        font-family: ${theme.normalFont};
    }
`
