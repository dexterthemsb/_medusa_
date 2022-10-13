import { Box, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import theme from "../config/theme";
import { IHistory } from "../types/shortcut";
import { getHistoryDateDifference } from "../utils/date";

const HistoryCard: FC<IHistory> = ({ user, label, task, value, date }) => {
  const getString1 = () => {
    const base = ` ${task} ${label}`;

    if (!!value.before && !!value.after) {
      return (
        <span style={{ color: theme.colors.gray[500] }}>
          <span>{base}</span>
          <Text display={["none", "none", "inline"]}> from</Text>
        </span>
      );
    }

    return base;
  };

  const getString2 = () => {
    if (!!value.before && !!value.after) {
      return (
        <Text display={["none", "none", "inline"]}>
          <br />
          <s>{`${value.before}`}</s>
          {" to "}
          <span
            style={{ color: theme.colors.indigo[500] }}
          >{`${value.after}`}</span>
        </Text>
      );
    }

    return null;
  };

  return (
    <Box w="full" display="flex" flexDir="row" alignItems="center">
      <Image
        rounded="full"
        mr="2"
        w="8"
        h="8"
        objectFit="cover"
        src={user.avatar}
      />

      <Text
        flex="1"
        fontSize="sm"
        lineHeight="shorter"
        color="gray.500"
        overflow="hidden"
        textOverflow="ellipsis"
        noOfLines={2}
      >
        <span style={{ fontWeight: 500, color: "black" }}>{user.name}</span>
        {getString1()}
        {getString2()}
      </Text>

      <Text fontSize="xs" color="gray.500">
        {getHistoryDateDifference(date)}
      </Text>
    </Box>
  );
};

export default HistoryCard;
