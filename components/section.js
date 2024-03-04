import { motion } from 'framer-motion'
import {
    chakra,
    shouldForwardProp,
    Box,
    useColorModeValue
} from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
    // shouldForwardProp: prop =>
    //     isValidMotionProp(prop) || shouldForwardProp(prop)
})

const Section = ({ children, delay = 0 }) => {
    return (
        <StyledDiv
            initial={{ y: 100, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay }}
            mb={6}
        >
            {children}
        </StyledDiv>
    )
}

export const SectionHomepage = ({ children, delay = 0 }) => {
    return (
        <Section delay={delay}>
            <Box
                mt={5}
                borderRadius="md"
                px={5}
                borderInline={'2px solid'}
                borderColor={'#81E6D988'}
                bgGradient="linear(to-t, #ff63c322, #81e6d922)"
                pb={4}
                pt={1}
                boxShadow={
                    '0px 0px 7px 1px' +
                    useColorModeValue('#10101055', '#81E6D955')
                }
            >
                {children}
            </Box>
        </Section>
    )
}

export default Section
