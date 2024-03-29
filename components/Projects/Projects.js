import { Box, HStack, Heading, Image } from "@chakra-ui/react";

function Projects() {
  const projects = Array.from({ length: 7 });
  return (
    <Box mb='160px'>
      <Heading textAlign='center' mb='80px'>
        Projects
      </Heading>
      <HStack
        // bgColor='red'
        justifyContent='center'
        flexWrap='wrap'
        // maxWidth='1340px'
        maxW='80vw'
        mx='auto'
        gap='4px'
      >
        {projects.map((p, i) => (
          <ProjectCell key={i} index={i} />
        ))}
      </HStack>
    </Box>
  );
}

export default Projects;

function ProjectCell() {
  return (
    <Box
      w='18vw'
      h='16vw'
      marginTop='-4vw'
      clipPath='polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
      pos='relative'
      role='group'
    >
      <Image
        src='https://tulaaruanfxnjckaiswj.supabase.co/storage/v1/object/public/projects/jfc%20universe2.png'
        alt='project'
        h='100%'
      />
      <Image
        src='https://tulaaruanfxnjckaiswj.supabase.co/storage/v1/object/public/projects/jfc%20universe1.png'
        alt='project'
        h='100%'
        pos='absolute'
        top='0'
        left='0'
        transform='scale(0)'
        transition='all .3s'
        _groupHover={{
          transform: "scale(1)",
        }}
      />
    </Box>
  );
}
