import {
    Heading,
    Box,
    Image,
    Link,
    Badge,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
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

export const WorkImage = ({ src, alt, fullSrc }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Image
                borderRadius="lg"
                w="full"
                src={src}
                alt={alt}
                mb={4}
                cursor="zoom-in"
                transition="transform 0.2s"
                _hover={{ transform: 'scale(1.01)' }}
                onClick={onOpen}
            />
            <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
                <ModalOverlay bg="blackAlpha.800" />
                <ModalContent
                    bg="transparent"
                    boxShadow="none"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    p={{ base: 2, md: 8 }}
                    onClick={onClose}
                    cursor="zoom-out"
                >
                    <ModalCloseButton color="white" size="lg" />
                    <Image
                        src={fullSrc || src}
                        fallbackSrc={src}
                        alt={alt}
                        maxW="100%"
                        maxH="calc(100vh - 4rem)"
                        objectFit="contain"
                        borderRadius="lg"
                    />
                </ModalContent>
            </Modal>
        </>
    )
}

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
