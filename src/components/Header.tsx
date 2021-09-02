import { css, useTheme } from '@emotion/react'
import { Link } from 'gatsby'
import { ITheme } from '../style/theme'

const navigationStyle = css`
    color: white;
    margin-right: 25px;
    text-decoration: none;
`

const Navigation = ({ to, label }: { to: string; label: string }) => (
    <li
        css={css`
            position: relative;
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
            `}
        >
            <ol
                css={css`
                    display: flex;
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
        </nav>
    )
}
