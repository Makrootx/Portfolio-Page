import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue, Box } from '@chakra-ui/react'

import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30 px;
    line-height: 20px;
    padding: 10px;

    img {
        transition: 0.3s ease-in-out;
    }

    &:hover img {
        transform: rotate(20deg);
    }
`

const Logo = () => {
    const footPrintImg = `/images/logo-${useColorModeValue('dark', 'light')}.png`

    return (
        <Link href="/">
            <LogoBox>
                <Box mt={-1}>
                    <Image
                        src={footPrintImg}
                        width={21}
                        height={20}
                        alt="logo"
                        // style={{ width: 'auto', height: 'auto' }}
                    />
                </Box>
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily="M PLUS Rounded 1c"
                    fontWeight="bold"
                    ml={3}
                >
                    Maksym Boiko
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo
