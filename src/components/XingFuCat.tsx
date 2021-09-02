import { useTheme, css, keyframes } from '@emotion/react'
import { ITheme } from '../style/theme'

export default function XingFuCat() {
    const theme: ITheme = useTheme()

    const armRightAnimation = keyframes`
        0% {
            transform: rotate(35deg);
            transform-origin: center;
        }
        50% {
            transform-origin: left;
            transform: rotate(35deg) translateY(-10px) translateX(-10px) scaleY(0.8);
        }
        100% {
            transform-origin: center;
            transform: rotate(35deg);
        }
    `

    const armTipAnimation = keyframes`
        0% {
            top: 128px;
        }
        50% {
            top: 175px;
        }
        100% {
        top: 128px;
        }
    `
    return (
        <div
            css={css`
                transform: scale(0.5);
                height: 400px;
            `}
        >
            <link
                rel="stylesheet"
                type="text/css"
                href="https://fonts.googleapis.com/css?family=Ma Shan Zheng"
            />

            <div
                css={css`
                    display: flex;
                    width: 100%;
                    height: 100%;
                    margin-top: 20px;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                `}
            >
                <div
                    css={css`
                        position: relative;
                        width: 340px;
                        display: flex;
                        justify-content: space-between;
                        flex-direction: column;
                    `}
                >
                    <div
                        css={css`
                            display: flex;
                            width: 100%;
                            justify-content: space-between;
                        `}
                    >
                        <div
                            css={css`
                                height: 110px;
                                width: 110px;
                                border: solid 8px black;
                                background-color: white;
                                border-radius: 26% 74% 72% 28% / 28% 38% 62% 72%;
                                position: relative;
                                transform: rotate(3deg);
                            `}
                        ></div>
                        <div
                            css={css`
                                height: 60px;
                                position: absolute;
                                top: 30px;
                                left: 30px;
                                width: 60px;
                                background-color: #df4a63;
                                border-radius: 26% 74% 72% 28% / 28% 38% 62% 72%;
                                border: solid 8px black;
                            `}
                        ></div>
                        <div
                            css={css`
                                height: 110px;
                                width: 110px;
                                border: solid 8px black;
                                background-color: white;
                                border-radius: 26% 74% 72% 28% / 28% 38% 62% 72%;
                                position: relative;
                                transform: rotate(84deg);
                            `}
                        ></div>
                        <div
                            css={css`
                                height: 60px;
                                position: absolute;
                                top: 30px;
                                right: 30px;
                                width: 60px;
                                background-color: #df4a63;
                                border-radius: 26% 74% 72% 28% / 28% 38% 62% 72%;
                                transform: rotate(88deg);
                                border: solid 8px black;
                            `}
                        ></div>
                    </div>
                    <div
                        css={css`
                            height: 250px;
                            width: 300px;
                            top: 10px;
                            left: 10px;
                            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
                            border: solid 8px black;
                            background-color: white;
                            position: absolute;
                            z-index: 4;
                        `}
                    >
                        <div
                            css={css`
                                display: flex;
                                justify-content: space-around;
                                padding-top: 85px;
                                height: 35px;
                            `}
                        >
                            {/* eye-left */}
                            <div
                                css={css`
                                    z-index: 3;
                                    width: 74px;
                                    height: 74px;
                                    border: 12px solid;
                                    border-color: black transparent transparent
                                        transparent;
                                    -webkit-border-radius: 50%;
                                    -moz-border-radius: 50%;
                                    border-radius: 50%;
                                    -webkit-transform: rotate(30deg);
                                    -moz-transform: rotate(30deg);
                                    transform: rotate(3deg);
                                    &:after {
                                        content: ' ';
                                        position: absolute;
                                        height: 12px;
                                        display: inline-block;
                                        width: 12px;
                                        left: 1px;
                                        top: 0px;
                                        background-color: black;
                                        border-radius: 61%;
                                    }
                                    &:before {
                                        content: ' ';
                                        position: absolute;
                                        height: 12px;
                                        display: inline-block;
                                        width: 12px;
                                        right: 1px;
                                        top: 0px;
                                        background-color: black;
                                        border-radius: 61%;
                                    }
                                `}
                            ></div>
                            {/* css={``} */}
                            {/* eye-right */}
                            <div
                                css={css`
                                    z-index: 3;
                                    width: 74px;
                                    height: 74px;
                                    border: 12px solid;
                                    border-color: black transparent transparent
                                        transparent;
                                    -webkit-border-radius: 50%;
                                    -moz-border-radius: 50%;
                                    border-radius: 50%;
                                    -webkit-transform: rotate(30deg);
                                    -moz-transform: rotate(30deg);
                                    transform: rotate(-3deg);
                                    &:before {
                                        content: ' ';
                                        position: absolute;
                                        height: 12px;
                                        display: inline-block;
                                        width: 12px;
                                        right: 1px;
                                        top: 0px;
                                        background-color: black;
                                        border-radius: 61%;
                                    }
                                    &:after {
                                        content: ' ';
                                        position: absolute;
                                        height: 12px;
                                        display: inline-block;
                                        width: 12px;
                                        left: 1px;
                                        top: 0px;
                                        background-color: black;
                                        border-radius: 61%;
                                    }
                                `}
                            ></div>
                        </div>
                        {/* face-center */}
                        <div
                            css={css`
                                display: flex;
                                width: 100%;
                            `}
                        >
                            {/* face-wrapper */}
                            <div>
                                {/* mustach-left */}
                                <div
                                    css={css`
                                        background-color: black;
                                        width: 50px;
                                        height: 8px;
                                        border-radius: 7% 93% 93% 7% / 47% 53%
                                            47% 53%;
                                        position: absolute;
                                        top: 140px;
                                        left: 14px;
                                    `}
                                ></div>
                                <div
                                    css={css`
                                        background-color: black;
                                        width: 50px;
                                        height: 8px;
                                        border-radius: 7% 93% 93% 7% / 47% 53%
                                            47% 53%;
                                        position: absolute;
                                        top: 155px;
                                        left: 14px;
                                        transform: rotate(-8deg);
                                    `}
                                ></div>
                            </div>
                            <div>
                                <div
                                    css={css`
                                        background-color: black;
                                        width: 50px;
                                        height: 8px;
                                        border-radius: 93% 7% 7% 93% / 53% 47%
                                            53% 47%;
                                        position: absolute;
                                        top: 140px;
                                        left: 240px;
                                    `}
                                ></div>
                                <div
                                    css={css`
                                        background-color: black;
                                        width: 50px;
                                        height: 8px;
                                        border-radius: 93% 7% 7% 93% / 53% 47%
                                            53% 47%;
                                        position: absolute;
                                        top: 155px;
                                        left: 240px;
                                        transform: rotate(8deg);
                                    `}
                                ></div>
                            </div>
                            <div>
                                <div
                                    // nose
                                    css={css`
                                        position: absolute;
                                        top: 130px;
                                        left: 135px;
                                        height: 20px;
                                        width: 35px;
                                        background-color: black;
                                        border-radius: 46% 54% 49% 51% / 66% 65%
                                            35% 34%;
                                    `}
                                ></div>
                                <div
                                    css={css`
                                        position: absolute;
                                        z-index: 3;
                                        top: 110px;
                                        left: 80px;
                                        width: 60px;
                                        height: 60px;
                                        border: 8px solid;
                                        border-color: transparent black black
                                            transparent;
                                        -webkit-border-radius: 50%;
                                        -moz-border-radius: 50%;
                                        border-radius: 50%;
                                        -webkit-transform: rotate(30deg);
                                        -moz-transform: rotate(30deg);
                                        transform: rotate(45deg);
                                    `}
                                ></div>
                                <div
                                    css={css`
                                        position: absolute;
                                        z-index: 3;
                                        top: 110px;
                                        left: 147px;
                                        width: 60px;
                                        height: 60px;
                                        border: 8px solid;
                                        border-color: transparent black black
                                            transparent;
                                        -webkit-border-radius: 50%;
                                        -moz-border-radius: 50%;
                                        border-radius: 50%;
                                        -webkit-transform: rotate(30deg);
                                        -moz-transform: rotate(30deg);
                                        transform: rotate(45deg);
                                    `}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div
                        css={css`
                            height: 95px;
                            background-color: #df4a63;
                            margin-top: 70px;
                            border-radius: 50% 50% 50% 50% / 0% 0% 100% 100%;
                            width: 250px;
                            align-self: center;
                            border: solid 8px black;
                            position: relative;
                            z-index: 3;
                        `}
                    >
                        <div
                            css={css`
                                background-color: #f9d552;
                                border-radius: 50%;
                                position: absolute;
                                top: 82px;
                                left: 90px;
                                height: 50px;
                                width: 50px;
                                border: solid 8px black;
                                &:before {
                                    content: '';
                                    height: 16px;
                                    width: 16px;
                                    border-radius: 50%;
                                    background-color: black;
                                    position: absolute;
                                    bottom: 3px;
                                    left: 18px;
                                }
                                &:after {
                                    content: '';
                                    height: 15px;
                                    width: 8px;
                                    background-color: black;
                                    position: absolute;
                                    bottom: 0px;
                                    left: 22px;
                                }
                            `}
                        >
                            <div
                                css={css`
                                    height: 13px;
                                    width: 20px;
                                    background-color: white;
                                    border-radius: 50%;
                                    position: absolute;
                                    top: 5px;
                                    right: 9px;
                                    transform: rotate(25deg);
                                `}
                            ></div>
                        </div>
                    </div>
                    <div
                        // arm-top-left-wrapper
                        css={css`
                            z-index: 2;
                        `}
                    >
                        <div
                            // arm-top-left
                            css={css`
                                position: absolute;
                                display: flex;
                                top: 200px;
                                width: 220px;
                                left: 6px;
                                height: 240px;
                                background: #fff;
                                border: 8px solid black;
                                transform: rotate(50deg);
                                border-radius: 50%;
                                border-color: transparent transparent black
                                    black;
                            `}
                        ></div>
                        <div
                            // arm-top-tip
                            css={css`
                                left: 70px;
                                bottom: 132px;
                                position: absolute;
                                display: flex;
                                z-index: 3;
                                background: white;
                                width: 68px;
                                height: 60px;
                                border: 8px solid black;
                                transform: rotate(92deg);
                                border-radius: 50%;
                                border-color: black black transparent black;
                                &:after {
                                    content: '';
                                    position: absolute;
                                    height: 67px;
                                    width: 49px;
                                    background: white;
                                    border-radius: 50%;
                                    bottom: -21px;
                                    left: 17px;
                                    transform: rotate(17deg);
                                }
                            `}
                        ></div>
                        <div
                            // class="gold"
                            css={css`
                                height: 217px;
                                width: 136px;
                                background: #f9d552;
                                border: solid 8px black;
                                left: 115px;
                                bottom: 8px;
                                border-radius: 61px;
                                position: absolute;
                                transform: rotate(45deg);
                                &:after {
                                    content: '';
                                    height: 50px;
                                    width: 22px;
                                    border-radius: 50%;
                                    background: white;
                                    position: absolute;
                                    transform: rotate(45deg);
                                    top: 4px;
                                    left: 17px;
                                }
                            `}
                        >
                            <span
                                // class="carving"
                                css={css`
                                    position: absolute;
                                    display: inline-block;
                                    font-family: 'Ma Shan Zheng', cursive;
                                    z-index: 3;
                                    top: 26px;
                                    left: 26px;
                                    width: 50px;
                                    font-size: 85px;
                                    font-weight: 600;
                                    line-height: 80px;
                                    color: black;
                                `}
                            >
                                幸福
                            </span>
                        </div>
                    </div>
                    {/* arm-top-right */}
                    <div
                        css={css`
                            position: absolute;
                            display: flex;
                            z-index: 2;
                            top: 132px;
                            width: 106px;
                            right: -26px;
                            height: 200px;
                            background: #fff;
                            border: 8px solid black;
                            transform: rotate(35deg);
                            border-radius: 50%;
                            border-color: transparent black transparent
                                transparent;
                            animation: ${armRightAnimation} 1.5s both infinite;
                        `}
                    ></div>
                    <div
                        //  class="arm-top-right-tip"
                        css={css`
                            position: absolute;
                            display: flex;
                            z-index: 2;
                            top: 175px;
                            right: -66px;
                            width: 85px;
                            background: white;
                            height: 60px;
                            border: 8px solid black;
                            border-radius: 50%;
                            border-color: black black black transparent;
                            animation: ${armTipAnimation} 1.5s both infinite;
                        `}
                    ></div>
                    <div
                        // class="back-legs"
                        css={css`
                            width: 100%;
                            height: 200px;
                            position: relative;
                            display: flex;
                            justify-content: space-between;
                        `}
                    >
                        <div
                            // class="back-leg-left"
                            css={css`
                                width: 120px;
                                height: 180px;
                                z-index: 0;
                                border-radius: 53% 47% 50% 50% / 59% 61% 39% 41%;
                                background-color: white;
                                position: relative;
                                padding-top: 30px;
                                border: solid 8px black;
                                border-color: transparent transparent
                                    transparent black;
                                transform: rotate(10deg);
                            `}
                        ></div>
                        <div
                            // class="back-leg-right"
                            css={css`
                                width: 120px;
                                height: 180px;
                                z-index: 0;
                                border-radius: 47% 53% 50% 50% / 61% 59% 41% 39%;
                                background-color: white;
                                position: relative;
                                padding-top: 30px;
                                border: solid 8px black;
                                border-color: black black transparent
                                    transparent;
                                transform: rotate(-10deg);
                            `}
                        ></div>
                    </div>
                    <div
                        // class="paws"
                        css={css`
                            position: relative;
                            width: 100%;
                            height: 100px;
                            margin-top: -28px;
                            display: flex;
                            justify-content: space-between;
                        `}
                    >
                        <div
                            // class="paw-left"
                            css={css`
                                height: 60px;
                                width: 100px;
                                margin-right: 4px;
                                border-radius: 47% 53% 50% 50% / 60% 60% 40% 40%;
                                border: solid 8px black;
                                background-color: white;
                            `}
                        ></div>
                        <div
                            // class="paw-right"
                            css={css`
                                height: 60px;
                                width: 100px;
                                margin-left: 4px;
                                border-radius: 47% 53% 50% 50% / 60% 60% 40% 40%;
                                border: solid 8px black;
                                background-color: white;
                            `}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
