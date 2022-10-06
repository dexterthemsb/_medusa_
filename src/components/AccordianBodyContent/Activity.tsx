import { Box, Center } from "@chakra-ui/react";
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
        <Box key={obj.id} w="full">
          {!!i && (
            <Center my="1" w="8" h="4">
              <Box rounded="full" h="full" w="1" bgColor="gray.100"></Box>
            </Center>
          )}

          {/* @ts-ignore */}
          <HistoryCard index={i} {...obj} />
        </Box>
      ))}
    </Box>
  );
};

export default Activity;
