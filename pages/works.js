import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbCalculator from '../public/images/CalculatorAI-thumbnail.png'
import thumbJPlatformer from '../public/images/JPlatformer-thumbnail.png'
import thumbPaneuropa from '../public/images/Paneuropa-thumbnaila.png'
import thumbAICademia from '../public/images/AICademia-thumbnail.png'
import thumbAnyMeal from '../public/images/AnyMeal/thumbnail.jpg'
import thumbSportsy from '../public/images/Sportsy/thumbnail.jpg'
import thumbCollaborate from '../public/images/Collaborate/thumbnail.jpg'
import thumbParkRadar from '../public/images/ParkRadar/thumbnail.jpg'
import Layout from '../components/layouts/article'
const Works = () => {
    return (
        <Layout title="Works">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id="sportsy"
                            title="Sportsy"
                            thumbnail={thumbSportsy}
                        >
                            Sports tournament app: NestJS backend with live
                            brackets, Flutter client. Team lead
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="anymeal"
                            title="AnyMeal"
                            thumbnail={thumbAnyMeal}
                        >
                            Nutrition tracker with AI photo and barcode
                            logging, React Native + NestJS
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem
                            id="collaborate"
                            title="Collaboration Platform"
                            thumbnail={thumbCollaborate}
                        >
                            Multi-tenant workspace backend in C++20 with a
                            React client
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem
                            id="parkradar"
                            title="ParkRadar"
                            thumbnail={thumbParkRadar}
                        >
                            HackYeah live parking map for web, iOS and
                            Android, Ionic React
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.2}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        Earlier work
                    </Heading>
                </Section>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.2}>
                        <WorkGridItem
                            id="aicademia"
                            title="AI Cademia"
                            thumbnail={thumbAICademia}
                        >
                            Web educational game built with React, ASP.NET and Three.js
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <WorkGridItem
                            id="calculator"
                            title="Calculator AI"
                            thumbnail={thumbCalculator}
                        >
                            A calculator with AI recognition of handwritten
                            mathematical symbols
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem
                            id="jplatformer"
                            title="JPlatformer"
                            thumbnail={thumbJPlatformer}
                        >
                            A 2D platformer game written in Java
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem
                            id="paneuropa"
                            title="Paneuropa Game"
                            thumbnail={thumbPaneuropa}
                        >
                            A 2D roguelike game built in 24 hours in Unity
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}
export default Works
