import { Link } from 'gatsby'
import { Layout } from '../components'

const NotFoundPage = () => {
    return (
        <Layout>
            <main>
                <h1>Oups. Looks like there's nothing here</h1>
                <Link to="/">Go home</Link>.
            </main>
        </Layout>
    )
}

export default NotFoundPage
