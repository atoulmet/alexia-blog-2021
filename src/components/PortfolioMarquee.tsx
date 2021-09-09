import { css, useTheme } from '@emotion/react'
import Marquee from 'react-fast-marquee'
import { ITheme } from '../style/theme'

export default function PortfolioMarquee() {
    const theme: ITheme = useTheme()

    return (
        <Marquee gradient={false} speed={20}>
            <span
                css={css`
                    font-family: ${theme.titleFont};
                    font-size: 50px;
                `}
            >
                Portfolio ·{' '}
                <span
                    css={css`
                        font-weight: 800;
                    `}
                >
                    文件夾
                </span>{' '}
                · Carteira ·{' '}
                <span
                    css={css`
                        font-weight: 800;
                    `}
                >
                    紙ばさみ{' '}
                </span>{' '}
                · Portafolio ·
                <span
                    css={css`
                        font-weight: 800;
                    `}
                >
                    포트폴리오{' '}
                </span>
                · Carteira ·{' '}
                <span
                    css={css`
                        font-weight: 800;
                    `}
                >
                    文件夾
                </span>{' '}
                ·
            </span>
        </Marquee>
    )
}
