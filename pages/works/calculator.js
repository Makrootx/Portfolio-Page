import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { useRouter } from 'next/router'

const Work = () => {
    const router = useRouter()
    return (
        <Layout title="Calculator AI">
            <Container>
                <Title>
                    Calculator AI <Badge>2024</Badge>
                </Title>
                <P>
                    A calculator app that get user handwrite input and
                    transforms it to numbers for next calculations.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link onClick={() => router.push('https://google.com')}>
                            https://google.com
                            <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>WPF .Net, Tensorflow.Net</span>
                    </ListItem>
                </List>
                <WorkImage
                    src="/images/projectThumbSample.png"
                    alt="Calculator AI"
                />
            </Container>
        </Layout>
    )
}

export default Work
