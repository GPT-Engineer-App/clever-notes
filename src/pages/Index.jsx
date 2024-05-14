import React from "react";
import { Container, Box, Heading, Text, VStack, HStack, IconButton, Image, Spacer } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Box as="header" bg="teal.500" color="white" py={4} px={8} borderRadius="md">
        <HStack justifyContent="space-between">
          <Heading as="h1" size="lg">
            My Website
          </Heading>
          <HStack spacing={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" variant="ghost" color="white" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" variant="ghost" color="white" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" variant="ghost" color="white" />
          </HStack>
        </HStack>
      </Box>

      {/* Main Content */}
      <Box as="main" my={8}>
        <VStack spacing={4}>
          <Heading as="h2" size="md">
            Welcome to My Website
          </Heading>
          <Text fontSize="lg">This is a simple website built with React and Chakra UI.</Text>
          <Image src="https://images.unsplash.com/photo-1606240724602-5b21f896eae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzE1NjkwNzI3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Beautiful Landscape" borderRadius="md" />
        </VStack>
      </Box>

      <Spacer />

      {/* Footer */}
      <Box as="footer" bg="teal.500" color="white" py={4} px={8} borderRadius="md" mt={8}>
        <Text textAlign="center">&copy; {new Date().getFullYear()} My Website. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;
