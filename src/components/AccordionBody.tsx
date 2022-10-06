import { AccordionPanel, Box } from "@chakra-ui/react";
import {
  ArrowTrendingUpIcon,
  EyeIcon,
  InformationCircleIcon,
  Square3Stack3DIcon
} from "@heroicons/react/24/outline";
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
      icon: <ArrowTrendingUpIcon {...SVG20} />,
      content: <Analytics />
    },
    activity: {
      icon: <Square3Stack3DIcon {...SVG20} />,
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
    <AccordionPanel pt="4">
      <Box display="flex" flexDir="row">
        <Box display="flex" flexDir="column">
          {Object.keys(NAVIGATION).map(key => (
            <IconButton
              key={key}
              rounded="lg"
              p="2"
              mt={key === "info" ? 0 : 2}
              bgColor={activeView === key ? "gray.100" : "transparent"}
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
