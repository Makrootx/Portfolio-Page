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

const AnyMealWork = () => {
    return (
        <Layout title="AnyMeal">
            <Container>
                <Title>
                    AnyMeal <Badge>Mobile</Badge>
                </Title>
                <Heading as="h4" fontSize={18} mb={2}>
                    Overview :
                </Heading>
                <P>
                    A cross-platform nutrition tracker for iOS and Android. A
                    meal is logged from a single photo or a barcode scan, and
                    the home screen is a dashboard of widgets the user picks and
                    arranges. The app is built with React Native (Expo) on a
                    NestJS and PostgreSQL backend with a Python recognition
                    service.
                </P>
                <Heading as="h4" fontSize={18} mt={2} mb={2}>
                    Features :
                </Heading>
                <Feature>
                    <FeatureSection>
                        AI photo logging: recognizes every food on the plate
                        with its portion, ready to adjust and log.
                    </FeatureSection>
                    <FeatureSection>
                        Barcode scanning: pulls nutrition data and checks it
                        against the user&apos;s allergens.
                    </FeatureSection>
                    <FeatureSection>
                        Widget dashboard: drag to reorder, resize and configure
                        water, calories, macros and streak widgets.
                    </FeatureSection>
                    <FeatureSection>
                        Analytics: weekly trends, goal history and body
                        measurements.
                    </FeatureSection>
                    <FeatureSection>
                        Personal setup: diets, allergens and health conditions
                        shape every warning; meal groups, reminders and custom
                        foods.
                    </FeatureSection>
                </Feature>

                <List ml={0} my={4}>
                    <ListItem>
                        <Meta>GitHub · Backend</Meta>
                        <Link
                            href="https://github.com/An4Type/F.A.R-backend"
                            target="_blank"
                        >
                            github.com/An4Type/F.A.R-backend
                            <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub · Frontend</Meta>
                        <Link
                            href="https://github.com/An4Type/F.A.R-frontend"
                            target="_blank"
                        >
                            github.com/An4Type/F.A.R-frontend
                            <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>iOS / Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Frontend</Meta>
                        <span>
                            React Native (Expo), TypeScript, Reanimated,
                            TanStack Query
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Backend</Meta>
                        <span>NestJS, TypeORM, PostgreSQL, Python, Docker</span>
                    </ListItem>
                </List>

                <WorkImage
                    src="/images/AnyMeal/thumbnail.jpg"
                    fullSrc="/images/AnyMeal/full/thumbnail.jpg"
                    alt="AnyMeal: photo recognition, widget home screen and barcode scan"
                />
                <WorkImage
                    src="/images/AnyMeal/panel-ai.jpg"
                    fullSrc="/images/AnyMeal/full/panel-ai.jpg"
                    alt="AnyMeal AI logging: photo recognition, barcode allergen check, catalog"
                />
                <WorkImage
                    src="/images/AnyMeal/panel-home.jpg"
                    fullSrc="/images/AnyMeal/full/panel-home.jpg"
                    alt="AnyMeal home widgets and analytics screens"
                />
                <WorkImage
                    src="/images/AnyMeal/panel-personal.jpg"
                    fullSrc="/images/AnyMeal/full/panel-personal.jpg"
                    alt="AnyMeal personal setup: diets, allergens, meal groups, reminders"
                />
            </Container>
        </Layout>
    )
}

export default AnyMealWork
