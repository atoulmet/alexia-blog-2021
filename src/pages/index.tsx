import { css } from '@emotion/react'

const IndexPage = () => {
    const color = 'red'
    return (
        <main
            css={css`
                padding: 32px;
                background-color: hotpink;
                font-size: 24px;
                border-radius: 4px;
                &:hover {
                    color: ${color};
                }
            `}
        >
            Bienvenue
        </main>
    )
}

export default IndexPage
