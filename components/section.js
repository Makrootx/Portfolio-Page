import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

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
            initial={{ y: 100, opacity: 0, scale: 1 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay }}
            mb={6}
        >
            {children}
        </StyledDiv>
    )
}

export default Section
