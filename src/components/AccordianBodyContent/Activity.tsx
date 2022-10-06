import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { IHistory } from "../../types/shortcut";
import HistoryCard from "../HistoryCard";

interface ActivityProps {
  activity: IHistory[];
}

const Activity: FC<ActivityProps> = ({ activity }) => {
  return (
    <Box minH="full">
      {activity.map((obj, i) => (
        // @ts-ignore
        <HistoryCard key={obj.id} index={i} {...obj} />
      ))}
    </Box>
  );
};

export default Activity;
