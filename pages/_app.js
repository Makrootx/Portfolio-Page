import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import Fonts from '../components/fonts'
import { GridItemStyle } from '../components/grid-item'
import { Analytics } from '@vercel/analytics/next'

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <GridItemStyle />
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
            <Analytics />
        </ChakraProvider>
    )
}
export default Website
