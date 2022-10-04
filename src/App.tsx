import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Container,
  ChakraProvider,
  Box,
  Heading
} from "@chakra-ui/react";
import { AccordionHeader } from "./components/AccordionHeader";
import theme from "./config/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container minHeight="100vh" px={[4, 8, 16]} maxWidth="container.lg">
        <Heading pt="16" pb="8">
          Shortcut Editor
        </Heading>

        <Accordion allowMultiple>
          <AccordionItem
            borderWidth="none"
            borderStyle="none"
            borderColor="none"
          >
            {({ isExpanded }) => (
              <Box
                rounded="lg"
                overflow="hidden"
                borderWidth={isExpanded ? "medium" : "thin"}
                borderStyle="solid"
                borderColor={isExpanded ? "purple.500" : "gray.200"}
                boxShadow={isExpanded ? "md" : "none"}
              >
                <AccordionHeader isExpanded={isExpanded} />

                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </Box>
            )}
          </AccordionItem>
        </Accordion>
      </Container>
    </ChakraProvider>
  );
}

export default App;
