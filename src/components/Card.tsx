import { useTheme, css, keyframes } from '@emotion/react'
import { ITheme } from '../style/theme'

interface CardProps {
    children: React.ReactNode
    width?: number
}

function Card({ children, width }: CardProps) {
    const theme: ITheme = useTheme()

    return (
        <div
            css={css`
                padding: 60px 30px;
                border: solid black 3px;
                position: relative;
                background-color: white;
                width: ${width ? width : '100%'}px;
                margin: 0 60px;
                display: flex;
                align-items: center;
                flex-direction: column;
                text-align: center;
                & h3 {
                    text-decoration: underline;
                }
                &:after {
                    content: '';
                    background-color: ${theme.primary};
                    position: absolute;
                    left: 25px;
                    right: -25px;
                    bottom: 25px;
                    top: -25px;
                    z-index: -1;
                }
            `}
        >
            {children}
        </div>
    )
}

export default Card
