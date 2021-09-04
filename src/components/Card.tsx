import { useTheme, css, keyframes } from '@emotion/react'
import { ITheme } from '../style/theme'

interface CardProps {
    children: React.ReactNode
    cssProps?: any
}

function Card({ children, cssProps }: CardProps) {
    const theme: ITheme = useTheme()

    return (
        <div
            css={css`
                border: solid black 3px;
                position: relative;
                background-color: white;

                margin: 0 60px;
                display: flex;
                align-items: center;
                flex-direction: column;
                text-align: center;

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
                ${cssProps}
            `}
        >
            {children}
        </div>
    )
}

export default Card
