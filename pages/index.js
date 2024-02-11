import { Box } from "@chakra-ui/react";

import Hero from "../components/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";

export default function Home() {
  return (
    <Box pb='80px' color='white' bgColor='#333'>
      <Hero />
      <About />
      <Projects />
    </Box>
  );
}
