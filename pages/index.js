import NextLink from 'next/link'
import {
    Container,
    Box,
    Heading,
    Image,
    Link,
    useColorModeValue,
    Button,
    List,
    ListItem,
    Icon,
    Stack
} from '@chakra-ui/react'

import { SectionHomepage } from '../components/section'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon, DownloadIcon } from '@chakra-ui/icons'
import { SkillGroup, ExperienceItem } from '../components/skills'
import Layout from '../components/layouts/article'
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius="lg"
                    bg={'#68D39188'}
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
                        <p>Full-Stack Developer · TypeScript · Node.js · React</p>
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
                                    '0px 0px 8px 2px' +
                                    useColorModeValue('#00000064', '#B2F5EA77')
                            }}
                        />
                    </Box>
                </Box>
                <SectionHomepage delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About
                    </Heading>
                    <Paragraph>
                        Full-stack TypeScript developer with a backend focus. I
                        build REST and real-time APIs with NestJS and
                        PostgreSQL, ship them with Docker, and build web and
                        cross-platform apps with React, Next.js, React Native
                        and Ionic. I also work in modern C++ and have built a
                        multi-tenant backend in C++20. Master&apos;s student in
                        Computer Science at Warsaw University of Technology and
                        four-time HackYeah participant.
                    </Paragraph>
                    <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        justify="center"
                        mt={4}
                        spacing={3}
                    >
                        <NextLink href="/works">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                                w="full"
                            >
                                My works
                            </Button>
                        </NextLink>
                        <Link
                            href="/cv/Maksym_Boiko_CV.pdf"
                            target="_blank"
                            _hover={{ textDecoration: 'none' }}
                        >
                            <Button
                                leftIcon={<DownloadIcon />}
                                colorScheme="teal"
                                variant="outline"
                                w="full"
                            >
                                Download CV
                            </Button>
                        </Link>
                    </Stack>
                </SectionHomepage>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Experience
                    </Heading>
                    <ExperienceItem
                        role="Application Engineer"
                        company="Heller Consult"
                        period="June 2025 – Present"
                    >
                        <li>
                            Designed a report generation engine with its own
                            transformation language and evaluator, turning
                            database data into Excel reports
                        </li>
                        <li>
                            Develop data transformation pipelines that process
                            and migrate road infrastructure data across
                            PostgreSQL databases
                        </li>
                        <li>
                            Build internal tools and maintain the databases
                            behind production road data platforms
                        </li>
                    </ExperienceItem>
                    <ExperienceItem
                        role="Freelance Web Developer"
                        company="Codecollider-tech"
                        period="Oct 2025 – Feb 2026"
                    >
                        <li>
                            Modernized a charity organization&apos;s React
                            application, refactoring its UI and delivering new
                            features
                        </li>
                        <li>
                            Built and launched a multilingual website with
                            online consultation booking, powered by TinaCMS
                        </li>
                    </ExperienceItem>
                    <ExperienceItem
                        role="Software Developer Intern"
                        company="Heller Consult"
                        period="Summers 2024 & 2025"
                    >
                        <li>
                            Designed and built a desktop configuration app
                            (React, Electron, PostgreSQL) that streamlines
                            project setup
                        </li>
                    </ExperienceItem>
                </Section>
                <Section delay={0.25}>
                    <Heading as="h3" variant="section-title">
                        Skills
                    </Heading>
                    <SkillGroup
                        core
                        title="Core"
                        skills={[
                            'TypeScript',
                            'Node.js',
                            'NestJS',
                            'React',
                            'PostgreSQL',
                            'Docker'
                        ]}
                    />
                    <SkillGroup
                        title="Backend"
                        skills={[
                            'Express',
                            'REST',
                            'WebSockets / Socket.IO',
                            'JWT / Passport',
                            'Swagger',
                            'C++20 / Crow',
                            'ASP.NET'
                        ]}
                    />
                    <SkillGroup
                        title="Frontend & mobile"
                        skills={[
                            'Next.js',
                            'Vue',
                            'React Native (Expo)',
                            'Ionic / Capacitor',
                            'Flutter',
                            'TanStack Query',
                            'Zustand',
                            'Tailwind'
                        ]}
                    />
                    <SkillGroup
                        title="Databases"
                        skills={[
                            'PostGIS',
                            'MySQL',
                            'SQL',
                            'TypeORM',
                            'Prisma',
                            'ODB / libpqxx'
                        ]}
                    />
                    <SkillGroup
                        title="DevOps & tools"
                        skills={[
                            'Docker Compose',
                            'GitHub Actions',
                            'Nginx',
                            'LXD',
                            'Linux',
                            'Google Cloud',
                            'CMake / vcpkg',
                            'Git',
                            'Bash'
                        ]}
                    />
                    <SkillGroup
                        title="Languages"
                        skills={[
                            'JavaScript',
                            'Python',
                            'C++',
                            'C#',
                            'Java',
                            'SQL'
                        ]}
                    />
                    <SkillGroup
                        title="Spoken"
                        skills={[
                            'English B2',
                            'Polish C1',
                            'Ukrainian (native)',
                            'Russian (native)'
                        ]}
                    />
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Education
                    </Heading>
                    <ExperienceItem
                        role="Master's, Computer Science"
                        company="Warsaw University of Technology"
                        period="Feb 2026 – Present"
                    />
                    <ExperienceItem
                        role="Engineer, Computer Science"
                        company="Akademia Bialska im. Jana Pawła II"
                        period="Oct 2022 – Feb 2026"
                    />
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Hobbies
                    </Heading>
                    <Paragraph>
                        Sports, programming algorithms, hackathons, playing the
                        guitar, editing in photoshop
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
                                href="https://www.linkedin.com/in/maksym-boiko-50855b443"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoLinkedin} />}
                                >
                                    Maksym Boiko
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="mailto:maksym782@gmail.com">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoMail} />}
                                >
                                    maksym782@gmail.com
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
