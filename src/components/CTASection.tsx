import { useTheme, css, keyframes } from '@emotion/react'
import { ITheme } from '../style/theme'
import CTA, { CTAProps } from './CTA'

interface CTASectionProps extends Partial<CTAProps> {
    title: string
    children?: React.ReactNode
}

export default function CTASection({
    title,
    children,
    CTAlink,
    CTAlabel,
}: CTASectionProps) {
    const theme: ITheme = useTheme()

    return (
        <div
            css={css`
                padding-bottom: 7px;
                background-color: ${theme.primary};
                border-top: solid 3px black;
                border-bottom: solid 3px black;
                padding: 75px 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
            `}
        >
            <h3
                css={css`
                    padding-bottom: 16px;
                `}
            >
                {title}
            </h3>
            {children}
            {CTAlink && CTAlabel && (
                <CTA CTAlink={CTAlink} CTAlabel={CTAlabel} />
            )}
        </div>
    )
}
