import {
    Badge,
    Container,
    Heading,
    List,
    ListItem,
    Link
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import {
    Feature,
    FeatureSection,
    Title,
    Meta,
    WorkImage
} from '../../components/work'
import P from '../../components/paragraph'
import { useRouter } from 'next/router'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const PaneuropaWork = () => {
    const router = useRouter()
    return (
        <Layout title="Paneuropa Game">
            <Container>
                <Title>
                    Paneuropa <Badge>2023</Badge>
                </Title>
                <Heading as="h4" fontSize={18} mb={2}>
                    Overview:
                </Heading>
                <P>
                    Developed a Unity 2D rogue-like game as part of a
                    promotional campaign for Paneuropa Comics, aiming to
                    showcase the company&aposs comic book characters and
                    narratives to a global audience. The project was completed
                    within a challenging 24-hour timeframe during the renowned
                    HackYeah! event, demonstrating proficiency in rapid game
                    development and promotional strategies.
                </P>
                <Heading as="h4" fontSize={18} mb={2} mt={2}>
                    Features:
                </Heading>
                <Feature>
                    <FeatureSection>
                        Rogue-Like Gameplay: Implemented classic rogue-like
                        mechanics such as procedurally generated levels,
                        permadeath, and random item drops to provide a
                        challenging and dynamic gaming experience.
                    </FeatureSection>
                    <FeatureSection>
                        Paneuropa Comics Integration: Seamlessly integrated
                        Paneuropa Comics&apos charactersa and abilities into the
                        game&aposs storyline and visuals to promote brand
                        recognition and engagement.
                    </FeatureSection>
                    <FeatureSection>
                        Unity 2D Graphics: Utilized Unity&aposs 2D game
                        development tools to create visually appealing graphics
                        and animations that complemented the game&aposs theme
                        and atmosphere.
                    </FeatureSection>
                </Feature>
                <List ml={0} my={4}>
                    <ListItem>
                        <Meta>GitHub URL</Meta>
                        <Link
                            onClick={() =>
                                router.push(
                                    'https://github.com/kondi918/HACKATHON'
                                )
                            }
                        >
                            https://github.com/kondi918/HACKATHON
                            <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Unity, C#</span>
                    </ListItem>
                </List>
                <WorkImage
                    src="/images/Paneuropa-thumbnail.png"
                    alt="JPlatformer_image"
                />
                <WorkImage
                    src="/images/Paneuropa/Paneuropa3.png"
                    alt="JPlatformer_image"
                />
                <WorkImage
                    src="/images/Paneuropa/Paneuropa.png"
                    alt="JPlatformer_image"
                />
                <WorkImage
                    src="/images/Paneuropa/Paneuropa1.png"
                    alt="JPlatformer_image"
                />
                <WorkImage
                    src="/images/Paneuropa/Paneuropa4.png"
                    alt="JPlatformer_image"
                />
                <WorkImage
                    src="/images/Paneuropa/Paneuropa2.png"
                    alt="JPlatformer_image"
                />
            </Container>
        </Layout>
    )
}
export default PaneuropaWork
