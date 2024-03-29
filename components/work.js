import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

export const Title = ({ children }) => {
    const router = useRouter()
    return (
        <Box>
            <Link onClick={() => router.push('/works')}>Works</Link>
            <span>
                &nbsp;
                <ChevronRightIcon />
                &nbsp;
            </span>
            <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
                {children}
            </Heading>
        </Box>
    )
}

export const WorkImage = ({ src, alt }) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)

export const Feature = styled.p`
    margin-left: 0.5rem;
    text-align: justify;
`

export const FeatureSection = ({ children }) => {
    return (
        <>
            <ChevronRightIcon />
            {children}
            <br />
        </>
    )
}
