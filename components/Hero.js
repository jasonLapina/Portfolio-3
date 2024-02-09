import { Box, Grid, Heading } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
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
  return (
    <Box mt='15vh' pos='relative'>
      <Heading
        fontSize={{ base: "80px", md: "10vw" }}
        lineHeight={{ md: "16vh" }}
      >
        <Box
          as='span'
          display='block'
          style={{ color: "transparent", WebkitTextStroke: "2px fuchsia" }}
        >
          Jason
        </Box>
        <Box
          as='span'
          ml='5vw'
          color='fuchsia'
          bgImage='url("/assets/codeLines.jpg")'
          bgClip='text'
          bgSize='40%'
        >
          Lapina
        </Box>
      </Heading>
    </Box>
  );
}

function HeroImg() {
  <Canvas></Canvas>;
}
