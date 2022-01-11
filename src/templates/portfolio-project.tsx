import { Layout } from '../components'
import { css } from '@emotion/react'
import { PortfolioProjectProps } from '../types/portfolio'

function PortfolioProjectContent({ data }: PortfolioProjectProps) {
    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                padding-top: 60px;
            `}
        ></div>
    )
}

export default function PortfolioProject({ data }: PortfolioProjectProps) {
    return (
        <Layout>
            <PortfolioProjectContent data={data} />
        </Layout>
    )
}
