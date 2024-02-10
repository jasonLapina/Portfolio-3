import { Box, Button, Grid, Heading } from "@chakra-ui/react";
import { Center, Environment, Float, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useScroll, useTransform, motion } from "framer-motion";
import { easing } from "maath";
import { Suspense, useRef } from "react";
import Layout from "./UI/Layout";
function Hero() {
  return (
    <Layout>
      <Grid
        gridTemplateColumns='1fr 1fr'
        justifyItems='center'
        justifyContent='center'
        gap='40px'
        h='100vh'
        alignContent='center'
        alignItems='center'
      >
        <HeroText />
        <Box h='75vh' w='100%'>
          <Canvas>
            <HeroImg />
          </Canvas>
        </Box>
      </Grid>
    </Layout>
  );
}

export default Hero;

function HeroText() {
  const { scrollY } = useScroll();

  const bgPos = useTransform(scrollY, [0, 600], ["0%", "100%"]);
  return (
    <Box pos='relative'>
      <Heading>
        <Box fontSize='24px'>Hi, I&apos;m</Box>
        <Box
          as='span'
          display='block'
          style={{ color: "transparent", WebkitTextStroke: "2px magenta" }}
          filter='drop-shadow(4px 4px rgba(0,0,0,1)) drop-shadow(0px 0px 2px magenta)'
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
          color='magenta'
          bgImage='url("/assets/codeLines.jpg")'
          bgClip='text'
          bgSize='40%'
          filter='drop-shadow(8px 8px magenta)'
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
  const model = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  const modelRef = useRef();
  useFrame((state, delta) => {
    easing.dampE(modelRef.current.rotation, [
      -state.pointer.y / 4,
      state.pointer.x / 4,
      0,
      0.25,
      delta,
    ]);
  });
  return (
    <>
      <ambientLight intensity={5} />
      <Environment preset='dawn' />

      <Center>
        <primitive scale={1.3} ref={modelRef} object={model.scene} />
        {/* <mesh scale={3.5} ref={modelRef}>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh> */}
      </Center>
    </>
  );
}
