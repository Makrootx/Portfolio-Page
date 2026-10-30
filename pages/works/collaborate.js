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

const CollaborateWork = () => {
    return (
        <Layout title="Collaboration Platform">
            <Container>
                <Title>
                    Collaboration Platform <Badge>C++20</Badge>
                </Title>
                <Heading as="h4" fontSize={18} mb={2}>
                    Overview :
                </Heading>
                <P>
                    A backend for managing a team&apos;s project ecosystem:
                    spaces, boards, tasks, groups and automation rules, written
                    in modern C++ with a ports-and-adapters architecture. A
                    React + TypeScript client covers every endpoint to show
                    what the backend can do.
                </P>
                <Heading as="h4" fontSize={18} mt={2} mb={2}>
                    Features :
                </Heading>
                <Feature>
                    <FeatureSection>
                        Multi-tenancy: every space gets its own PostgreSQL
                        schema, provisioned from ODB-generated DDL;
                        repositories switch search_path per call.
                    </FeatureSection>
                    <FeatureSection>
                        Field-level permissions: groups grant read, create,
                        update and delete rights per entity and per field;
                        hidden fields come back masked.
                    </FeatureSection>
                    <FeatureSection>
                        Automation engine: JSON rules matched against every
                        read and write recorded by a domain decorator.
                    </FeatureSection>
                    <FeatureSection>
                        Middleware chain in Crow: JWT → space membership →
                        merged group permissions, with Argon2 password hashes.
                    </FeatureSection>
                    <FeatureSection>
                        React client: kanban boards, task editor, filterable
                        task list, permission editor and rule builder.
                    </FeatureSection>
                </Feature>

                <List ml={0} my={4}>
                    <ListItem>
                        <Meta>GitHub URL</Meta>
                        <Link
                            href="https://github.com/Makrootx/cpp-collaborate-platform"
                            target="_blank"
                        >
                            github.com/Makrootx/cpp-collaborate-platform
                            <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Backend</Meta>
                        <span>
                            C++20, Crow, PostgreSQL, ODB, libpqxx, jwt-cpp,
                            spdlog
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Frontend</Meta>
                        <span>React, TypeScript, Vite</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Build</Meta>
                        <span>CMake, vcpkg, Docker</span>
                    </ListItem>
                </List>

                <Heading as="h4" fontSize={18} mt={6} mb={3}>
                    Backend architecture
                </Heading>
                <WorkImage
                    src="/images/Collaborate/panel-backend.jpg"
                    fullSrc="/images/Collaborate/full/panel-backend.jpg"
                    alt="C++20 Crow API with middleware chain, modules, domain decorators and PostgreSQL schemas"
                />
                <WorkImage
                    src="/images/Collaborate/panel-request.jpg"
                    fullSrc="/images/Collaborate/full/panel-request.jpg"
                    alt="Request lifecycle from route match to database row"
                />
                <WorkImage
                    src="/images/Collaborate/panel-tenancy.jpg"
                    fullSrc="/images/Collaborate/full/panel-tenancy.jpg"
                    alt="Multi-tenancy with one PostgreSQL schema per space"
                />
                <WorkImage
                    src="/images/Collaborate/panel-permissions.jpg"
                    fullSrc="/images/Collaborate/full/panel-permissions.jpg"
                    alt="Field-level permission resolution"
                />
                <WorkImage
                    src="/images/Collaborate/panel-automations.jpg"
                    fullSrc="/images/Collaborate/full/panel-automations.jpg"
                    alt="Automation rule engine"
                />

                <Heading as="h4" fontSize={18} mt={6} mb={3}>
                    React client
                </Heading>
                <WorkImage
                    src="/images/Collaborate/panel-app.jpg"
                    fullSrc="/images/Collaborate/full/panel-app.jpg"
                    alt="Kanban board, task editor and task list"
                />
                <WorkImage
                    src="/images/Collaborate/panel-access.jpg"
                    fullSrc="/images/Collaborate/full/panel-access.jpg"
                    alt="Permission editor, masked member view and rule builder"
                />
            </Container>
        </Layout>
    )
}

export default CollaborateWork
