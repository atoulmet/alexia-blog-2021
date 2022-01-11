import { useState } from 'react'
import { css, useTheme } from '@emotion/react'
import { Link } from 'gatsby'
import { ITheme } from '../style/theme'
import BurgerMenu from './BurgerMenu'

const navigationStyle = css`
    color: white;
    margin-right: 25px;
    text-decoration: none;
`

const Navigation = ({ to, label }: { to: string; label: string }) => (
    <li
        css={css`
            position: relative;
            @media (max-width: 600px) {
                margin-top: 30px;
                width: fit-content;
            }
        `}
    >
        <Link
            css={navigationStyle}
            activeClassName="at-active-navigation"
            to={to}
        >
            {label}
        </Link>
    </li>
)

export default function Header() {
    const theme: ITheme = useTheme()
    const [isOpen, setOpen] = useState(false)

    return (
        <nav
            css={css`
                height: 100px;
                background-color: black;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                color: white;
                font-family: ${theme.titleFont};
                font-size: 20px;
                @media (max-width: 600px) {
                    flex-direction: column;
                    position: relative;
                    & div {
                        position: absolute;
                        right: 20px;
                        top: 15px;
                    }
                    ${isOpen &&
                    `
                    position: absolute;
                    z-index: 99;
                    inset:0;
                    height: unset;
                    `}
                }
            `}
        >
            <ol
                css={css`
                    display: flex;
                    @media (max-width: 600px) {
                        flex-direction: column;
                        height: 100%;
                        padding-top: 100px;
                        ${!isOpen &&
                        `
                            visibility: hidden;
                    `};
                    }
                    & .at-active-navigation {
                        &:after {
                            position: absolute;
                            content: '';
                            left: 0;
                            right: 25px;
                            height: 3px;
                            bottom: -5px;
                            background-color: ${theme.secondary};
                            border-radius: 3px;
                        }
                    }
                `}
            >
                <Navigation to="/" label="Accueil" />
                <Navigation to="/about" label="À propos" />

                <Navigation to="/blog" label="Blog" />
                <Navigation to="/portfolio" label="Portfolio" />
            </ol>
            <BurgerMenu isOpen={isOpen} setOpen={setOpen} />
        </nav>
    )
}
