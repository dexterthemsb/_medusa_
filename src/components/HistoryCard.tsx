import { Box, Image, Text, theme } from "@chakra-ui/react";
import { FC } from "react";
import { IHistory } from "../types/shortcut";
import { getHistoryDateDifference } from "../utils/date";

const HistoryCard: FC<IHistory> = ({ user, label, task, value, date }) => {
  const getString1 = () => {
    const base = ` ${task} ${label}`;
    if (!!value.before && !!value.after) return base + " from";
    else return base;
  };

  const getString2 = () => {
    if (!!value.before && !!value.after) {
      return (
        <>
          <br />
          <s>{`${value.before}`}</s>
          {" to "}
          <span
            style={{ color: theme.colors.blue[400] }}
          >{`${value.after}`}</span>
        </>
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

      <Text flex="1" fontSize="sm" lineHeight="shorter" color="gray.500">
        <span style={{ fontWeight: 500, color: "black" }}>{user.name}</span>
        {getString1()}
        {getString2()}
      </Text>

      <Text fontSize="sm" color="gray.500">
        {getHistoryDateDifference(date)}
      </Text>
    </Box>
  );
};

export default HistoryCard;
