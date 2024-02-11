import {
  Box,
  VStack,
  Heading,
  Text,
  HStack,
  Icon,
  Grid,
  Image,
  Tooltip,
} from "@chakra-ui/react";

import { FaDesktop } from "react-icons/fa";
import { apiURL } from "../../utils/config";

function Copy({ tech }) {
  return (
    <VStack
      css={{ "&::-webkit-scrollbar": { width: "0" } }}
      align='normal'
      pr='80px'
      py='40px'
      overflow='auto'
      gap='48px'
    >
      <Intro />
      <Skills />
      <TechStack tech={tech} />
      <Background />
    </VStack>
  );
}

export default Copy;

function TechStack({ tech }) {
  return (
    <Box>
      <Heading mb='24px'>my technology</Heading>
      <HStack gap='24px' flexWrap='wrap' justifyContent='center' maxW='100%'>
        {tech.map((t) => (
          <Tooltip key={t.name} label={t.name}>
            <Image
              filter='drop-shadow(1px 2px rgba(255,0,255,.5))'
              w='80px'
              alt={t.name}
              src={
                apiURL +
                `/storage/v1/object/public/skills/${t.name.toLowerCase()}.svg`
              }
            />
          </Tooltip>
        ))}
      </HStack>
    </Box>
  );
}

function Background() {
  return (
    <Box>
      <Heading mb='24px'>my background</Heading>
      <Grid gridTemplateColumns='repeat(4,1fr)'></Grid>
    </Box>
  );
}

function Intro() {
  return (
    <Box borderBottom='solid 2px #666' pb='40px'>
      <Heading fontSize='56px' mb='16px'>
        about me
      </Heading>
      <HStack fontStyle='italic' gap='8px'>
        <Text letterSpacing='widest' fontWeight='bold' color='magenta'>
          Skills
        </Text>
        <Text color='#999'>/</Text>
        <Text letterSpacing='widest' fontWeight='bold' color='magenta'>
          Tech-Stack
        </Text>
        <Text color='#999'>/</Text>
        <Text letterSpacing='widest' fontWeight='bold' color='magenta'>
          Background
        </Text>
      </HStack>
      <Text mt='40px' color='#999'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ex nihil
        unde earum, cum quas quae, assumenda error beatae eveniet mollitia
        veniam. Consectetur earum, inventore recusandae animi nulla laudantium
        voluptatem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
        voluptates cumque id neque, optio ad pariatur rem nostrum ipsa quia
        quasi repellendus officia tenetur possimus enim minus eius suscipit ea?
      </Text>
    </Box>
  );
}

function Skills() {
  const skills = [
    {
      icon: FaDesktop,
      title: "development",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: FaDesktop,
      title: "design",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: FaDesktop,
      title: "optimization",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: FaDesktop,
      title: "collaboration",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <Box>
      <Heading mb='24px'>my skills</Heading>
      <Grid gridTemplateColumns='1fr 1fr' gap='16px'>
        {skills.map((s) => (
          <Box key={s.title}>
            <Icon color='magenta' mb='8px' boxSize='32px' as={s.icon} />
            <Text mb='8px' fontSize='24px' fontWeight='bold'>
              {s.title}
            </Text>
            <Text color='#999'>{s.text}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
