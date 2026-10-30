import { Box, Text, Wrap, WrapItem, Tag } from '@chakra-ui/react'

export const SkillGroup = ({ title, skills, core = false }) => {
    return (
        <Box mb={3}>
            <Text fontWeight="bold" fontSize={14} mb={1}>
                {title}
            </Text>
            <Wrap spacing={2}>
                {skills.map(skill => (
                    <WrapItem key={skill}>
                        <Tag
                            size="md"
                            colorScheme="teal"
                            variant={core ? 'solid' : 'subtle'}
                        >
                            {skill}
                        </Tag>
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    )
}

export const ExperienceItem = ({ role, company, period, children }) => (
    <Box mb={4}>
        <Box display={{ md: 'flex' }} justifyContent="space-between">
            <Text fontWeight="bold">
                {role}{' '}
                <Text as="span" fontWeight="normal">
                    · {company}
                </Text>
            </Text>
            <Text fontSize={14} opacity={0.75} flexShrink={0} ml={{ md: 4 }}>
                {period}
            </Text>
        </Box>
        {children && (
            <Box as="ul" pl={5} mt={1} fontSize={15}>
                {children}
            </Box>
        )}
    </Box>
)
