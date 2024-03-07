import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Heading
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
    Title,
    WorkImage,
    Meta,
    Feature,
    FeatureSection
} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { useRouter } from 'next/router'

const CalculatorAIWork = () => {
    const router = useRouter()
    return (
        <Layout title="Calculator AI">
            <Container>
                <Title>
                    Calculator AI <Badge>2024</Badge>
                </Title>
                <Heading as="h4" fontSize={18} mb={2}>
                    Overview :
                </Heading>
                <P>
                    Developed a user-friendly calculator application in C# with
                    integrated AI for seamless mathematical operations. Features
                    handwriting recognition for inputting numbers and arithmetic
                    operations, customizable test environment, and interactive
                    playground for AI predictions.
                </P>

                <Heading as="h4" fontSize={18} mt={2} mb={2}>
                    Features :
                </Heading>
                <Feature>
                    <FeatureSection>
                        Calculator Screen: Intuitive interface with handwriting
                        input, calculation buttons, and customization options.
                    </FeatureSection>
                    <FeatureSection>
                        Battle Screen: Dynamic platform for assessing
                        mathematical abilities with customizable parameters.
                    </FeatureSection>
                    <FeatureSection>
                        Playground Screen: Interactive space to test AI&aposs
                        predictive capabilities through handwritten input.
                    </FeatureSection>
                </Feature>

                <List ml={0} my={4}>
                    <ListItem>
                        <Meta>GitHub URL</Meta>
                        <Link
                            onClick={() =>
                                router.push(
                                    'https://github.com/Makrootx/CalculatorAI'
                                )
                            }
                        >
                            https://github.com/Makrootx/CalculatorAI
                            <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>WPF .Net Framework, Tensorflow.Net</span>
                    </ListItem>
                </List>
                <WorkImage
                    src="/images/CalculatorAI-thumbnail.png"
                    alt="CalculatorAI_image"
                />
                <WorkImage
                    src="/images/CalculatorAI/CalculatorAI1.png"
                    alt="CalculatorAI_image"
                />
                <WorkImage
                    src="/images/CalculatorAI/CalculatorAI2.png"
                    alt="CalculatorAI_image"
                />
                <WorkImage
                    src="/images/CalculatorAI/CalculatorAI3.png"
                    alt="CalculatorAI_image"
                />
            </Container>
        </Layout>
    )
}

export default CalculatorAIWork
