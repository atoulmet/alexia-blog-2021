import { useTheme, css, keyframes } from '@emotion/react'
import { ITheme } from '../style/theme'
import { Link } from 'gatsby'
import React from 'react'

export interface CTAProps {
    CTAlink: string
    CTAlabel: string
    isExternalLink?: boolean
}

function LinkWrapper({
    isExternalLink,
    children,
    CTAlink,
}: {
    isExternalLink: boolean
    children: React.ReactNode
    CTAlink: string
}) {
    return isExternalLink ? (
        <a href={CTAlink}>{children}</a>
    ) : (
        <Link to={CTAlink}>{children}</Link>
    )
}

export default function CTA({ CTAlink, CTAlabel }: CTAProps) {
    const theme: ITheme = useTheme()
    const isExternalLink = CTAlink.includes('http')

    return (
        <div
            css={css`
                padding-bottom: 7px;
            `}
        >
            <LinkWrapper CTAlink={CTAlink} isExternalLink={isExternalLink}>
                <button
                    css={css`
                        border: solid 3px black;
                        background-color: white;
                        font-family: ${theme.normalFont};
                        font-size: 24px;
                        font-weight: 600;
                        padding: 15px 30px;
                        position: relative;
                        padding-bottom: 12px;
                        cursor: pointer;
                        &:hover {
                            transform: translate(0px, 2px);
                            transition: 200ms;
                            &:after {
                                transform: translate(-0px, -1px);
                                transition: 200ms;
                            }
                        }
                        &:after {
                            content: '';
                            background-color: black;
                            position: absolute;
                            bottom: -10px;
                            left: 6px;
                            right: 6px;
                            height: 3px;
                        }
                    `}
                >
                    {CTAlabel}
                </button>
            </LinkWrapper>
        </div>
    )
}
