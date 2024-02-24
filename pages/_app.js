import { ChakraProvider } from "@chakra-ui/provider";
import Layout from '../components/layouts/main'
import { extendTheme} from "@chakra-ui/react";
import theme from "../libs/theme";

const myTheme=extendTheme({
    config:{
        initialColorMode: 'dark',
        useSystemColorMode: true
    }
})

const Website=({Component, pageProps, router})=>{
    return(
        <ChakraProvider theme={theme}>
            <Layout router={router}>
                <Component {... pageProps} key={router.route}/>
            </Layout>
        </ChakraProvider>
    )
}
export default Website