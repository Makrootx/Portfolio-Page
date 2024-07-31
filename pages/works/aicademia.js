import {
    Container,
    Heading,
    Badge,
    List,
    Link,
    ListItem
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
    Title,
    Feature,
    FeatureSection,
    Meta,
    WorkImage
} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import {} from '@chakra-ui/react'

const AICademiaWork = () => {
    const router = useRouter()
    return (
        <Layout title="AI Cademia">
            <Container>
                <Title>
                    AI Cademia <Badge>2024</Badge>
                </Title>
                <Heading as="h4" fontSize={18} mb={2}>
                    Overview :
                </Heading>
                <P>
                    Developed web-educational game by a diverse university team,
                    that leverages React for the frontend, ASP.Net for the
                    backend, and Three.js for immersive game rendering. It
                    offers users an innovative way to learn English through
                    AI-powered interactions with NPCs from various professions,
                    enhancing practical language skills in a fun and engaging
                    manner.
                </P>
                <Heading as="h4" fontSize={18} mt={2} mb={2}>
                    Features :
                </Heading>
                <Feature>
                    <FeatureSection>
                        Interactive Learning Environment: The game offers
                        platform where users can learn English in a fun and
                        interactive way.
                    </FeatureSection>
                    <FeatureSection>
                        AI-Powered NPCs: Interact with characters from various
                        professions, simulating real-world dialogues.
                    </FeatureSection>
                    <FeatureSection>
                        Task-Based Learning: Complete tasks using specific
                        vocabulary to reinforce language skills.
                    </FeatureSection>
                    <FeatureSection>
                        Boss Challenge: Face a final boss to test your
                        cumulative knowledge and skills.
                    </FeatureSection>
                </Feature>

                <List ml={0} my={4}>
                    <ListItem>
                        <Meta>GitHub URL</Meta>
                        <Link
                            onClick={() =>
                                router.push(
                                    'https://github.com/BimBomTeam/weg-front'
                                )
                            }
                        >
                            https://github.com/BimBomTeam/weg-front
                            <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Website URL</Meta>
                        <Link
                            onClick={() =>
                                router.push('https://aicademia.xyz/')
                            }
                        >
                            https://aicademia.xyz/
                            <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, JS, ASP.NET, Three.js</span>
                    </ListItem>
                </List>
                <WorkImage
                    src="/images/AICademia/AICademia.png"
                    alt="AICademia_image"
                />
                <WorkImage
                    src="/images/AICademia/AICademia5.png"
                    alt="AICademia_image"
                />
                <WorkImage
                    src="/images/AICademia/AICademia2.png"
                    alt="AICademia_image"
                />
                <WorkImage
                    src="/images/AICademia/AICademia3.png"
                    alt="AICademia_image"
                />
                <WorkImage
                    src="/images/AICademia/AICademia4a.png"
                    alt="AICademia_image"
                />
            </Container>
        </Layout>
    )
}

export default AICademiaWork
