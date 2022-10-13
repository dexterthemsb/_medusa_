import { AccordionButton, Box, Image, Input } from "@chakra-ui/react";
import {
  DuplicateIcon,
  HeartIcon as HeartIconSolid,
  OfficeBuildingIcon,
  ShareIcon,
  TrashIcon
} from "@heroicons/react/solid";
import {
  ExternalLinkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  HeartIcon as HeartIconOutline
} from "@heroicons/react/outline";
import { FC, MouseEvent, useState } from "react";
import { SVG20 } from "../constants/misc";
import IconButton from "./IconButton";

interface AccordianHeaderProps {
  isExpanded: boolean;
  liked: boolean;
  shortcutName: string;
  orgAvatar: string;
}

export const AccordionHeader: FC<AccordianHeaderProps> = ({
  isExpanded,
  liked,
  shortcutName,
  orgAvatar
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(liked);

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

  const getInputDisplay = () => {
    if (isExpanded) return ["none", "block"];
    else return "block";
  };

  return (
    <AccordionButton
      cursor="pointer"
      as={Box}
      py={isExpanded ? "4" : "2"}
      justifyContent="space-between"
      _hover={{ backgroundColor: "transparent" }}
    >
      <Image
        rounded="full"
        bgColor="gray.100"
        w="12"
        h="12"
        border="6px solid white"
        src={orgAvatar}
      ></Image>

      <Box ml="2" flex="1" display={getInputDisplay()} textAlign="left">
        <Input
          size="sm"
          rounded="default"
          readOnly={!isExpanded}
          variant={isExpanded ? "outline" : "unstyled"}
          bg={isExpanded ? "white" : "transparent"}
          borderWidth="thin"
          borderStyle="solid"
          borderColor={isExpanded ? "gray.300" : "transparent"}
          cursor={isExpanded ? "text" : "pointer"}
          defaultValue={shortcutName}
          onClick={handleInputOnClick}
          onMouseDown={handleInputOnMouseDown}
        />
      </Box>

      <Box display={["none", "none", "flex"]} flexDir="row" alignItems="center">
        <Image
          rounded="full"
          ml="4"
          w="8"
          h="8"
          src="/images/avatars/Geralt.svg"
        />

        <Box ml="1" display="flex" flexDir="row" alignItems="center">
          <IconButton stopPropagation onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? (
              <HeartIconSolid {...SVG20} />
            ) : (
              <HeartIconOutline {...SVG20} />
            )}
          </IconButton>
          <IconButton stopPropagation>
            <OfficeBuildingIcon {...SVG20} />
          </IconButton>

          {!!isExpanded && (
            <>
              <IconButton stopPropagation>
                <ExternalLinkIcon {...SVG20} />
              </IconButton>
              <IconButton stopPropagation>
                <DuplicateIcon {...SVG20} />
              </IconButton>
              <IconButton stopPropagation>
                <ShareIcon {...SVG20} />
              </IconButton>
              <IconButton stopPropagation>
                <TrashIcon {...SVG20} />
              </IconButton>
            </>
          )}
        </Box>
      </Box>

      <IconButton
        mr="0"
        rounded="default"
        bgColor="white"
        _hover={{ backgroundColor: "white" }}
      >
        {isExpanded ? (
          <ChevronUpIcon {...SVG20} />
        ) : (
          <ChevronDownIcon {...SVG20} />
        )}
      </IconButton>
    </AccordionButton>
  );
};
