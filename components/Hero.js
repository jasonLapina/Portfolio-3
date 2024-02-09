import { Box, Button, Grid, Heading, Text } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { useScroll, useTransform, motion } from "framer-motion";
function Hero() {
  return (
    <Grid
      gridTemplateColumns='1fr 1fr'
      h='75vh'
      justifyItems='center'
      justifyContent='center'
      gap='40px'
    >
      <HeroText />
      <HeroImg />
    </Grid>
  );
}

export default Hero;

function HeroText() {
  const { scrollY } = useScroll();

  const bgPos = useTransform(scrollY, [0, 600], ["0%", "100%"]);
  return (
    <Box mt='4vh' pos='relative'>
      <Heading>
        <Box fontSize='24px'>Hi, I&apos;m</Box>
        <Box
          as='span'
          display='block'
          style={{ color: "transparent", WebkitTextStroke: "2px fuchsia" }}
          filter='drop-shadow(4px 4px rgba(0,0,0,1)) drop-shadow(0px 0px 2px fuchsia)'
          fontSize={{ base: "80px", md: "10vw" }}
          lineHeight={{ md: "16vh" }}
        >
          Jason
        </Box>
        <Box
          fontSize={{ base: "80px", md: "10vw" }}
          lineHeight={{ md: "16vh" }}
          as={motion.span}
          style={{
            backgroundPositionX: bgPos,
          }}
          ml='5vw'
          color='fuchsia'
          bgImage='url("/assets/codeLines.jpg")'
          bgClip='text'
          bgSize='40%'
          filter='drop-shadow(8px 8px fuchsia)'
        >
          Lapina
        </Box>
        <Box ml='3vw' mt='40px' fontSize='24px'>
          Web Developer | React | Node | AWS
        </Box>
      </Heading>
    </Box>
  );
}

function HeroImg() {
  <Canvas></Canvas>;
}
