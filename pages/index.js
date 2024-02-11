import { Box } from "@chakra-ui/react";

import Hero from "../components/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import supabase from "../utils/supabase";

export default function Home(props) {
  return (
    <Box pb='80px' color='white' bgColor='#333'>
      <Hero />
      <Projects />
      <About tech={props.tech} />
    </Box>
  );
}

export async function getStaticProps() {
  const { data: tech } = await supabase.from("skills").select("*");
  return {
    props: { tech },
  };
}
