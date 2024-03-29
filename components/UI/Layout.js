import { Box } from "@chakra-ui/react";
function Layout({ children }) {
  return (
    <Box overflowX='hidden' px={{ base: "16px", md: "80px" }}>
      {children}
    </Box>
  );
}

export default Layout;
