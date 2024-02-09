import { Box } from "@chakra-ui/react";
function Layout({ children }) {
  return (
    <Box
      overflowX='hidden'
      bgColor='#ddd'
      px={{ base: "16px", md: "80px" }}
      py='80px'
    >
      {children}
    </Box>
  );
}

export default Layout;
