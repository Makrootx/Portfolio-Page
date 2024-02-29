import NextLink from 'next/link'
import {
    Container,
    Box,
    Heading,
    Image,
    Link,
    useColorModeValue,
    Button,
    SimpleGrid,
    List,
    ListItem,
    Icon
} from '@chakra-ui/react'

import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { IoLogoGithub, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5'
import { GridItem } from '../components/grid-item'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    mb={6}
                    p={3}
                    align="center"
                >
                    Hello, I&apos;m a full-stack developer based in Poland!
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Maksym Boiko
                        </Heading>
                        <p>Developer/Artist</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center"
                    >
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/profilePhoto.jpg"
                            alt="Profile Image"
                            style={{
                                boxShadow:
                                    '0px 0px 0px 2px' +
                                    useColorModeValue('#00000064', '#B2F5EA89')
                            }}
                        />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Works
                    </Heading>
                    <Paragraph>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts and visual mockups.Lorem ipsum is placeholder
                        text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups
                        named <Link href="/works/myWork">Work</Link>.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                            >
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2005</BioYear>
                        Born in Lutsk, Ukraine.
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Begined studies in Academi of Biała Podlaska
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Hobbies
                    </Heading>
                    <Paragraph>
                        I liked sport, programing, guitar, photoshop.
                    </Paragraph>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Web Links
                    </Heading>
                    <List>
                        <ListItem>
                            <Link
                                href="https://github.com/makrootx"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoGithub} />}
                                >
                                    @makrootx
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                href="https://www.instagram.com/maksum_boiko"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoInstagram} />}
                                >
                                    @maksum_boiko
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                href="https://www.facebook.com/profile.php?id=100009912338526"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoFacebook} />}
                                >
                                    @Max Boiko
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}
export default Page
