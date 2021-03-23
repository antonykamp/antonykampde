import { Heading, Stack, Text, Box, Flex, Divider, Link, LinkBox, LinkOverlay, Progress, Spacer } from "@chakra-ui/react";

interface SkillProps {
    skillName: string,
    skillLevel: number
}
export default function Skill({ skillName, skillLevel }: SkillProps){
    return (
        <Flex direction="row" alignItems="center">
            <Text as="i" fontSize="lg">{skillName}</Text>
            <Spacer/>
            <Box borderWidth="1.5px" bgColor="gray.50" borderRadius="lg" height="3" width="18em" verticalAlign="center">
                <Box borderWidth="1.5px" bgColor="brand.900" borderRadius="lg" width={((skillLevel*18)/100) + "em"} height="3"/>
            </Box>
        </Flex>
    )
}
