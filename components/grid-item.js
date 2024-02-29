import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { useRouter } from 'next/router'

export const GridItem = ({ children, href, title, thumbnail }) => {
    return (
        <Box w="100%" align="center">
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                    loading="lazy"
                >
                    <LinkOverlay href={href} target="_blank">
                        <Text mt={2}>{title}</Text>
                    </LinkOverlay>
                    <Text fontSize={14}>{children}</Text>
                </Image>
            </LinkBox>
        </Box>
    )
}

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
    const router = useRouter()
    return (
        <Box w="100%" align="center">
            {/* <NextLink href={`/works/${id}`}>
                
            </NextLink> */}
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                />
                <LinkOverlay onClick={() => router.push(`/works/${id}`)}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                    <Text fontSize={14}>{children}</Text>
                </LinkOverlay>
            </LinkBox>
        </Box>
    )
}

export const GridItemStyle = () => (
    <Global
        styles={`
    .grid-item-thumbnail{
        border-radius:12px;
    }
    `}
    ></Global>
)
