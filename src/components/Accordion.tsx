import {
  Accordion as ChakraAccordion,
  AccordionItem,
  Box
} from "@chakra-ui/react";
import { FC } from "react";
import { AccordionProps } from "../types/shortcut";
import AccordionBody from "./AccordionBody";
import { AccordionHeader } from "./AccordionHeader";

const Accordion: FC<AccordionProps> = props => {
  return (
    <ChakraAccordion allowMultiple>
      <AccordionItem borderWidth="none" borderStyle="none" borderColor="none">
        {({ isExpanded }) => (
          <Box
            rounded="lg"
            overflow="hidden"
            borderWidth={isExpanded ? "medium" : "thin"}
            borderStyle="solid"
            borderColor={isExpanded ? "indigo.500" : "gray.100"}
            boxShadow={isExpanded ? "expanded" : "base"}
            _hover={{
              borderColor: isExpanded ? "indigo.500" : "gray.200",
              backgroundColor: isExpanded ? "transparent" : "gray.100"
            }}
          >
            <AccordionHeader
              liked={props.liked}
              shortcutName={props.shortcutName}
              orgAvatar={props.orgAvatar}
              isExpanded={isExpanded}
            />

            <AccordionBody shortcut={props} isExpanded={isExpanded} />
          </Box>
        )}
      </AccordionItem>
    </ChakraAccordion>
  );
};

export default Accordion;
