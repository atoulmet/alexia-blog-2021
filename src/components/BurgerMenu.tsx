import { css, useTheme } from '@emotion/react'
import { ITheme } from '../style/theme'

// const crossStroke = css`
//     display: block;
//     background: #000;
//     border-radius: 2px;
//     transition: 0.25s ease-in-out;
//     position: absolute;
//     height: 100%;
//     width: 100%;
//     transform: rotate(45deg);
//     span {
//         transition: 0.25s ease-in-out;
//         &:nth-child(1) {
//             width: 4px;
//             position: absolute;
//             left: 18px;
//         }
//         &:nth-child(2) {
//             height: 4px;
//             position: absolute;
//             top: 18px;
//         }
//     }
// `

const stroke = css`
    display: block;
    background: #fff;
    border-radius: 2px;
`

function BurgerMenu({
    isOpen,
    setOpen,
}: {
    isOpen: boolean
    setOpen: (i: boolean) => void
}) {
    return (
        <div
            css={css`
                width: 40px;
                height: 40px;
                position: relative;
                box-sizing: border-box;
                @media (min-width: 601px) {
                    display: none;
                }
            `}
            // MenuWrapper
            onClick={() => setOpen(!isOpen)}
        >
            <div //Hamburger
                css={css`
                    transition: 0.25s ease-in-out;
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    & span {
                        transition: 0.25s ease-in-out;
                        width: ${!isOpen ? '40px' : '0'};
                        height: 4px;
                        top: 24px;
                        left: 20px;
                        margin: 7px 0;
                    }
                    & span:nth-of-type(1) {
                        transition-delay: ${!isOpen ? '.5s' : '0s'};
                    }
                    & span:nth-of-type(2) {
                        transition-delay: ${!isOpen ? '.625s' : '.125s'};
                    }
                    & span:nth-of-type(3) {
                        transition-delay: ${!isOpen ? '.75s' : '.25s'};
                    }
                `}
            >
                <span css={stroke} />
                <span css={stroke} />
                <span css={stroke} />
            </div>

            <div
                css={css`
                    display: block;
                    background: #000;
                    border-radius: 2px;
                    transition: 0.25s ease-in-out;
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    transform: rotate(45deg);
                    span {
                        transition: 0.25s ease-in-out;
                    }
                    & span:nth-of-type(1) {
                        height: ${isOpen ? '100%' : '0%'};
                        width: 4px;
                        position: absolute;
                        left: 18px;
                        transition-delay: ${!isOpen ? '0' : '.625s'};
                    }
                    & span:nth-of-type(2) {
                        width: ${isOpen ? '100%' : '0%'};
                        height: 4px;
                        position: absolute;
                        top: 18px;
                        transition-delay: ${!isOpen ? '.25s' : '.375s'};
                    }
                `}
            >
                <span css={stroke} />
                <span css={stroke} />
            </div>
        </div>
    )
}

export default BurgerMenu
