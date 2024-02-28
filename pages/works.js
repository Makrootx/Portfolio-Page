import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbCalculator from '../public/images/projectThumbSample.png'
import thumbJavaGame from '../public/images/projectThumbSample.png'
import Layout from '../components/layouts/article'
const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id="calculator"
                            title="Calculator AI"
                            thumbnail={thumbCalculator}
                        >
                            A calculator with AI implamentation of recognizing
                            mathematical symbols
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="javagame"
                            title="Java Game"
                            thumbnail={thumbJavaGame}
                        >
                            A 2D Platformer Game writed on Java
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}
export default Works
