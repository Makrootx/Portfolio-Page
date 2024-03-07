import {
    Badge,
    Container,
    Heading,
    Link,
    List,
    ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import {
    Title,
    Meta,
    WorkImage,
    Feature,
    FeatureSection
} from '../../components/work'
import P from '../../components/paragraph'
import { useRouter } from 'next/router'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const JPlatformerWork = () => {
    const router = useRouter()
    return (
        <Layout title="JPlatformer">
            <Container>
                <Title>
                    JPlatformer <Badge>2022</Badge>
                </Title>
                <Heading as="h4" fontSize={18} mb={2}>
                    Overview :
                </Heading>
                <P>
                    Developed a Java-based 2D platform game designed to engage
                    users in completing levels and achieving the highest score,
                    providing a relaxing yet competitive gaming experience. The
                    project aimed to offer users an entertaining platform to
                    enjoy while challenging their skills and encouraging
                    competition. The game&aposs interface and functionalities
                    were presented in English for broader accessibility.
                </P>
                <Heading as="h4" fontSize={18} mt={2} mb={2}>
                    Features :
                </Heading>
                <Feature>
                    <FeatureSection>
                        Menu Screen: Implemented an intuitive menu screen to
                        guide users through program navigation.
                    </FeatureSection>
                    <FeatureSection>
                        Settings Screen: Designed a settings screen for users to
                        customize application properties according to their
                        preferences.
                    </FeatureSection>
                    <FeatureSection>
                        Dynamic Gameplay: Featured available and locked levels,
                        with progress saved and updated in real-time for
                        seamless gameplay.
                    </FeatureSection>
                    <FeatureSection>
                        Clear Rules: Established clear rules and mechanics to
                        ensure a controlled and competitive gameplay experience.
                    </FeatureSection>
                </Feature>
                <List ml={0} my={4}>
                    <ListItem>
                        <Meta>GitHub URL</Meta>
                        <Link
                            onClick={() =>
                                router.push(
                                    'https://github.com/Makrootx/JPlatformerGame'
                                )
                            }
                        >
                            https://github.com/Makrootx/JPlatformerGame
                            <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Java, Swing</span>
                    </ListItem>
                </List>
                <WorkImage
                    src="/images/JPlatformer-thumbnail.png"
                    alt="JPlatformer_image"
                />
                <WorkImage
                    src="/images/JPlatformer/JPlatformer3.png"
                    alt="JPlatformer_image"
                />
                <WorkImage
                    src="/images/JPlatformer/JPlatformer2.png"
                    alt="JPlatformer_image"
                />
                <WorkImage
                    src="/images/JPlatformer/JPlatformer1.png"
                    alt="JPlatformer_image"
                />
                <WorkImage
                    src="/images/JPlatformer/JPlatformer4.png"
                    alt="JPlatformer_image"
                />
            </Container>
        </Layout>
    )
}

export default JPlatformerWork
