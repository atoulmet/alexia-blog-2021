import { useTheme, css, keyframes } from '@emotion/react'
import { ITheme } from '../style/theme'
import { Link } from 'gatsby'

export interface CTAProps {
    CTAlink: string
    CTAlabel: string
}

export default function CTA({ CTAlink, CTAlabel }: CTAProps) {
    const theme: ITheme = useTheme()

    return (
        <div
            css={css`
                padding-bottom: 7px;
            `}
        >
            <Link to={CTAlink}>
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
            </Link>
        </div>
    )
}
