import Head from 'next/head'
import NavBar from '../navbar'
import { Container, Box } from '@chakra-ui/layout'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Maksym Boiko - Homepage</title>
            </Head>

            <NavBar path={router.asPath} />
            <Container maxW="container.md" pt={61}>
                {children}
            </Container>
        </Box>
    )
}

export default Main
