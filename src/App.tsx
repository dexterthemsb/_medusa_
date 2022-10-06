import { Container, ChakraProvider, Heading } from "@chakra-ui/react";
import Accordion from "./components/Accordion";
import theme from "./config/theme";
import { data } from "./data/dummy";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container minHeight="100vh" px={[4, 8, 16]} maxWidth="container.lg">
        <Heading pt="16" pb="8">
          Shortcut Editor
        </Heading>
        <Accordion {...data} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
