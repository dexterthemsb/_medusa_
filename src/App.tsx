import {
  Accordion,
  AccordionItem,
  Container,
  ChakraProvider,
  Box,
  Heading
} from "@chakra-ui/react";
import AccordionBody from "./components/AccordionBody";
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
                <AccordionBody isExpanded={isExpanded} />
              </Box>
            )}
          </AccordionItem>
        </Accordion>
      </Container>
    </ChakraProvider>
  );
}

export default App;
