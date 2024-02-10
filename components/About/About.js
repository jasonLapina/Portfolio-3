import { Box, Grid, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import Copy from "./Copy";
function About() {
  return (
    <Grid
      maxW='1280px'
      mx='auto'
      gridTemplateColumns='1fr 1fr'
      h='70vh'
      bgColor='#222'
      borderRadius='20px'
    >
      <Profile />
      <Copy />
    </Grid>
  );
}

export default About;

function Profile() {
  const socMed = [
    {
      icon: FaGithub,
      link: "1",
    },
    {
      icon: FaLinkedin,
      link: "2",
    },
    {
      icon: FaGithub,
      link: "3",
    },
  ];
  return (
    <HStack gap='0'>
      <Box borderRadius='16px 0 0 16px' h='80%' w='80px'>
        <Grid
          h='100%'
          alignContent='center'
          alignItems='center'
          gridTemplateRows='1fr 4fr 1fr'
          justifyContent='center'
          color='magenta'
        >
          <Box fontWeight='bolder' fontSize='32px' as='span'>
            JL
          </Box>
          <VStack gap='32px'>
            {socMed.map((s) => (
              <a key={s.link} href=''>
                <Icon boxSize='24px' as={s.icon} />
              </a>
            ))}
          </VStack>
          <Icon cursor='pointer' boxSize='32px' as={FaFileDownload} />
        </Grid>
      </Box>
      <Box
        bg='rgba(255,255,255,.2)'
        borderRadius='16px'
        // boxShadow='0 4px 30px rgba(0,0,0,.1)'
        boxShadow='0 4px 30px rgba(255,255,255,.5)'
        backdropFilter='blur(5px)'
        border='solid 1px rgba(255,255,255,.3)'
        style={{
          WebkitBackdropFilter: "blur(5px)",
        }}
        w='80%'
        h='100%'
        transform='scaleY(1.05)'
        bgImage='linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.7)), url("/assets/me.png")'
        bgSize='cover'
        bgRepeat='no-repeat'
        bgPos='center'
        pos='relative'
      >
        <Text
          pos='absolute'
          bottom='80px'
          left='50%'
          transform='translateX(-50%)'
          fontSize='48px'
          w='100%'
          textAlign='center'
        >
          Jason Lapina
        </Text>
        <Text
          pos='absolute'
          bottom='56px'
          left='50%'
          transform='translateX(-50%)'
          fontSize='20px'
          fontStyle='italic'
          color='magenta'
          fontWeight='bold'
          letterSpacing='widest'
        >
          Developer | Designer
        </Text>
      </Box>
    </HStack>
  );
}
