import { AccordionPanel, Box } from "@chakra-ui/react";
import {
  TrendingUpIcon,
  InformationCircleIcon,
  StatusOnlineIcon
} from "@heroicons/react/outline";
import { EyeIcon } from "@heroicons/react/solid";
import { FC, useState } from "react";
import { SVG20 } from "../constants/misc";
import { AccordionProps } from "../types/shortcut";
import Activity from "./AccordianBodyContent/Activity";
import Analytics from "./AccordianBodyContent/Analytics";
import Eye from "./AccordianBodyContent/Eye";
import Info from "./AccordianBodyContent/Info";
import IconButton from "./IconButton";

interface AccordionBodyProps {
  isExpanded: boolean;
  shortcut: AccordionProps;
}

const AccordionBody: FC<AccordionBodyProps> = ({ shortcut }) => {
  const NAVIGATION = {
    info: {
      icon: <InformationCircleIcon {...SVG20} />,
      content: (
        <Info
          url={shortcut.url}
          description={shortcut.description}
          tags={shortcut.tags}
        />
      )
    },
    analytics: {
      icon: <TrendingUpIcon {...SVG20} />,
      content: <Analytics />
    },
    activity: {
      icon: <StatusOnlineIcon {...SVG20} />,
      content: <Activity activity={shortcut.activity} />
    },
    eye: {
      icon: <EyeIcon {...SVG20} />,
      content: <Eye />
    }
    // add more views in future
  };

  const [activeView, setActiveView] = useState<string>("info");

  return (
    <AccordionPanel px="4" pt="0" pb="4">
      <Box display="flex" flexDir="row" p="2">
        <Box display="flex" flexDir="column">
          {Object.keys(NAVIGATION).map(key => (
            <IconButton
              mr="0"
              key={key}
              rounded="lg"
              mt={key === "info" ? 0 : 4}
              bgColor={activeView === key ? "blue.100" : "transparent"}
              onClick={() => setActiveView(key)}
            >
              {/* @ts-ignore */}
              {NAVIGATION[key].icon}
            </IconButton>
          ))}
        </Box>

        <Box flex="1" ml="4">
          {/* @ts-ignore */}
          {NAVIGATION[activeView].content}
        </Box>
      </Box>
    </AccordionPanel>
  );
};

export default AccordionBody;
