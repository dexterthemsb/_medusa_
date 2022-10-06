import { Box, Center, Image, Text, theme } from "@chakra-ui/react";
import { FC } from "react";
import { IHistory } from "../types/shortcut";

interface HistoryCardProps extends IHistory {
  index: number;
}

const HistoryCard: FC<HistoryCardProps> = ({
  index,
  user,
  label,
  task,
  value,
  date
}) => {
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
    <>
      {!!index && (
        <Center my="1" w="8" h="4">
          <Box rounded="full" h="full" w="1" bgColor="gray.100"></Box>
        </Center>
      )}

      <Box display="flex" flexDir="row" alignItems="center">
        <Image
          rounded="full"
          mr="2"
          w="8"
          h="8"
          objectFit="cover"
          src={user.avatar}
        />

        <Text fontSize="sm" lineHeight="shorter" color="gray.500">
          <span style={{ fontWeight: 500, color: "black" }}>{user.name}</span>
          {getString1()}
          {getString2()}
        </Text>
      </Box>
    </>
  );
};

export default HistoryCard;
