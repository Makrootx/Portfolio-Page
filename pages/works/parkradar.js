import {
    Container,
    Heading,
    Badge,
    List,
    Link,
    ListItem
} from '@chakra-ui/react'
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

const ParkRadarWork = () => {
    return (
        <Layout title="ParkRadar">
            <Container>
                <Title>
                    ParkRadar <Badge>HackYeah</Badge>
                </Title>
                <Heading as="h4" fontSize={18} mb={2}>
                    Overview :
                </Heading>
                <P>
                    A live parking-availability map built by our team at
                    HackYeah in Kraków. I was responsible for the frontend: an
                    Ionic React app shipped as a PWA and as iOS and Android apps
                    from one codebase, plus a showcase page that presents the
                    project and the camera demo.
                </P>
                <Heading as="h4" fontSize={18} mt={2} mb={2}>
                    Features :
                </Heading>
                <Feature>
                    <FeatureSection>
                        Live map: availability for every nearby parking,
                        refreshed every few seconds, with turn-by-turn routes.
                    </FeatureSection>
                    <FeatureSection>
                        Map controls: parking as hexes (H3) or heat, filters for
                        price, type, EV and accessible spaces.
                    </FeatureSection>
                    <FeatureSection>
                        Driver reports: users mark free spots for others.
                    </FeatureSection>
                    <FeatureSection>
                        Camera AI: a YOLOX detector counts cars in marked zones
                        of a public camera; the showcase shows the frame, the
                        API response and the result in the app.
                    </FeatureSection>
                    <FeatureSection>English and Polish.</FeatureSection>
                </Feature>

                <List ml={0} my={4}>
                    <ListItem>
                        <Meta>GitHub · App</Meta>
                        <Link
                            href="https://github.com/An4Type/park-radar-front"
                            target="_blank"
                        >
                            github.com/An4Type/park-radar-front
                            <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub · Showcase</Meta>
                        <Link
                            href="https://github.com/An4Type/park-radar-showcase"
                            target="_blank"
                        >
                            github.com/An4Type/park-radar-showcase
                            <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub · AI showcase</Meta>
                        <Link
                            href="https://github.com/An4Type/park-radar-ai-show-case"
                            target="_blank"
                        >
                            github.com/An4Type/park-radar-ai-show-case
                            <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub · Backend</Meta>
                        <Link
                            href="https://github.com/An4Type/park-radar-back"
                            target="_blank"
                        >
                            github.com/An4Type/park-radar-back
                            <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Frontend developer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web (PWA) / iOS / Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            Ionic React, Capacitor, TypeScript, MapLibre, H3,
                            Zustand
                        </span>
                    </ListItem>
                </List>

                <Heading as="h4" fontSize={18} mt={6} mb={3}>
                    Showcase page
                </Heading>
                <WorkImage
                    src="/images/ParkRadar/20-showcase.jpg"
                    fullSrc="/images/ParkRadar/full/20-showcase.jpg"
                    alt="ParkRadar showcase web page"
                />
                <WorkImage
                    src="/images/ParkRadar/panel-ai.jpg"
                    fullSrc="/images/ParkRadar/full/panel-ai.jpg"
                    alt="Camera AI demo: detected cars, API response and app result"
                />

                <Heading as="h4" fontSize={18} mt={6} mb={3}>
                    The app
                </Heading>
                <WorkImage
                    src="/images/ParkRadar/panel-map.jpg"
                    fullSrc="/images/ParkRadar/full/panel-map.jpg"
                    alt="Live map, nearby list, parking details, navigation and search"
                />
                <WorkImage
                    src="/images/ParkRadar/panel-drivers.jpg"
                    fullSrc="/images/ParkRadar/full/panel-drivers.jpg"
                    alt="Map layers, filters and driver reports"
                />
            </Container>
        </Layout>
    )
}

export default ParkRadarWork
