import { AccordionButton, Box, Input } from "@chakra-ui/react";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import {
  ArrowTopRightOnSquareIcon as ArrowTopRightOnSquareIconOutline,
  BuildingOfficeIcon as BuildingOfficeIconOutline,
  ChevronDownIcon as ChevronDownIconOutline,
  ChevronUpIcon as ChevronUpIconOutline,
  HeartIcon as HeartIconOutline,
  ShareIcon as ShareIconOutline,
  Square2StackIcon as Square2StackIconOutline,
  TrashIcon as TrashIconOutline
} from "@heroicons/react/24/outline";
import { FC, MouseEvent, useState } from "react";
import { SVG20 } from "../constants/misc";
import IconButton from "./IconButton";

interface AccordianHeaderProps {
  isExpanded: boolean;
}

export const AccordionHeader: FC<AccordianHeaderProps> = ({ isExpanded }) => {
  const [liked, setLiked] = useState<boolean>(false);

  const handleInputOnClick = (
    e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>
  ) => {
    if (isExpanded) e.stopPropagation();
  };

  const handleInputOnMouseDown = (
    e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>
  ) => {
    if (!isExpanded) e.preventDefault();
  };

  return (
    <AccordionButton
      py="4"
      justifyContent="space-between"
      _hover={{ backgroundColor: isExpanded ? "none" : "gray.100" }}
    >
      <Box
        rounded="full"
        bgColor="yellow.400"
        w="9"
        h="9"
        outline="thick solid white"
      ></Box>

      <Box
        flex="1"
        display={["none", "none", "flex"]}
        flexDir="row"
        alignItems="center"
      >
        <Box ml="4" flex="1" textAlign="left">
          <Input
            readOnly={!isExpanded}
            variant={isExpanded ? "outline" : "unstyled"}
            focusBorderColor="purple.500"
            h="max-content"
            py="1"
            px="2"
            bg={isExpanded ? "white" : "transparent"}
            borderWidth="thin"
            borderStyle="solid"
            borderColor={isExpanded ? "gray.200" : "transparent"}
            cursor={isExpanded ? "text" : "pointer"}
            defaultValue="o/signup-flow"
            onClick={handleInputOnClick}
            onMouseDown={handleInputOnMouseDown}
          />
        </Box>

        <Box ml="4" rounded="full" bgColor="blue.400" w="8" h="8"></Box>

        <Box ml="3" display="flex" flexDir="row" alignItems="center">
          <IconButton stopPropagation onClick={e => setLiked(!liked)}>
            {liked ? (
              <HeartIconSolid {...SVG20} />
            ) : (
              <HeartIconOutline {...SVG20} />
            )}
          </IconButton>
          <IconButton stopPropagation>
            <BuildingOfficeIconOutline {...SVG20} />
          </IconButton>

          {!!isExpanded && (
            <>
              <IconButton stopPropagation>
                <ArrowTopRightOnSquareIconOutline {...SVG20} />
              </IconButton>
              <IconButton stopPropagation>
                <Square2StackIconOutline {...SVG20} />
              </IconButton>
              <IconButton stopPropagation>
                <ShareIconOutline {...SVG20} />
              </IconButton>
              <IconButton stopPropagation>
                <TrashIconOutline {...SVG20} />
              </IconButton>
            </>
          )}
        </Box>
      </Box>

      <IconButton
        rounded="xl"
        bgColor="white"
        _hover={{ backgroundColor: "white" }}
      >
        {isExpanded ? (
          <ChevronUpIconOutline {...SVG20} />
        ) : (
          <ChevronDownIconOutline {...SVG20} />
        )}
      </IconButton>
    </AccordionButton>
  );
};
