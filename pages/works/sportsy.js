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

const SportsyWork = () => {
    return (
        <Layout title="Sportsy">
            <Container>
                <Title>
                    Sportsy <Badge>Team Lead</Badge>
                </Title>
                <Heading as="h4" fontSize={18} mb={2}>
                    Overview :
                </Heading>
                <P>
                    A mobile app for organizing sports tournaments: rooms,
                    teams, generated brackets and live match scores. I led an
                    Agile team, designed and built the NestJS backend, and set
                    up its Docker deployment and CI. On the Flutter app I
                    organized the work, reviewed pull requests and requested the
                    changes needed to integrate with the API.
                </P>
                <Heading as="h4" fontSize={18} mt={2} mb={2}>
                    Backend :
                </Heading>
                <Feature>
                    <FeatureSection>
                        Bracket engine: single and double elimination, round
                        robin and pools, stored as a JSON tree; winners advance
                        automatically when a match is completed.
                    </FeatureSection>
                    <FeatureSection>
                        Live games: a Socket.IO gateway gives each tournament
                        its own room and pushes every score change to viewers.
                    </FeatureSection>
                    <FeatureSection>
                        Rooms and roles: JWT access and refresh tokens with
                        Passport, guards for admin, observer and spectator
                        roles.
                    </FeatureSection>
                    <FeatureSection>
                        Delivery: Docker Compose on a VPS behind Nginx with
                        Let&apos;s Encrypt TLS; GitHub Actions lint pull
                        requests and deploy on merge to main.
                    </FeatureSection>
                    <FeatureSection>
                        Testing: Jest unit tests and Supertest API tests against
                        a real Postgres via Testcontainers.
                    </FeatureSection>
                </Feature>

                <List ml={0} my={4}>
                    <ListItem>
                        <Meta>GitHub · Backend</Meta>
                        <Link
                            href="https://github.com/PrimalTeam/sportsy-back"
                            target="_blank"
                        >
                            github.com/PrimalTeam/sportsy-back
                            <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub · Frontend</Meta>
                        <Link
                            href="https://github.com/PrimalTeam/sportsy-front"
                            target="_blank"
                        >
                            github.com/PrimalTeam/sportsy-front
                            <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Team lead · backend · frontend code review</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Android / iOS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Backend</Meta>
                        <span>
                            NestJS, TypeScript, TypeORM, PostgreSQL, Socket.IO,
                            Swagger
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Frontend</Meta>
                        <span>Flutter, Dio, socket_io_client</span>
                    </ListItem>
                    <ListItem>
                        <Meta>DevOps</Meta>
                        <span>
                            Docker Compose, Nginx, Certbot, GitHub Actions
                        </span>
                    </ListItem>
                </List>

                <Heading as="h4" fontSize={18} mt={6} mb={3}>
                    Backend architecture
                </Heading>
                <WorkImage
                    src="/images/Sportsy/panel-backend.jpg"
                    fullSrc="/images/Sportsy/full/panel-backend.jpg"
                    alt="Sportsy backend architecture: Flutter app, Nginx, NestJS API modules, PostgreSQL and CI/CD pipeline"
                />
                <WorkImage
                    src="/images/Sportsy/panel-request.jpg"
                    fullSrc="/images/Sportsy/full/panel-request.jpg"
                    alt="Lifecycle of a score update request through guards, service, bracket recalculation and broadcast"
                />
                <WorkImage
                    src="/images/Sportsy/panel-bracket.jpg"
                    fullSrc="/images/Sportsy/full/panel-bracket.jpg"
                    alt="Bracket engine generating and advancing the tournament tree"
                />
                <WorkImage
                    src="/images/Sportsy/panel-realtime.jpg"
                    fullSrc="/images/Sportsy/full/panel-realtime.jpg"
                    alt="Socket.IO gateway with a room per tournament"
                />
                <WorkImage
                    src="/images/Sportsy/panel-access.jpg"
                    fullSrc="/images/Sportsy/full/panel-access.jpg"
                    alt="Rooms, roles and PostgreSQL entities"
                />

                <Heading as="h4" fontSize={18} mt={6} mb={3}>
                    Flutter app
                </Heading>
                <WorkImage
                    src="/images/Sportsy/panel-app.jpg"
                    fullSrc="/images/Sportsy/full/panel-app.jpg"
                    alt="Sportsy app screens: tournaments, details, teams, results"
                />
                <WorkImage
                    src="/images/Sportsy/panel-live.jpg"
                    fullSrc="/images/Sportsy/full/panel-live.jpg"
                    alt="Sportsy app screens: generated bracket, live score control"
                />
            </Container>
        </Layout>
    )
}

export default SportsyWork
