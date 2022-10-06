import { Box, Input, Text, Textarea, theme } from "@chakra-ui/react";
import { FC } from "react";

interface InfoProps {
  url: string;
  description: string;
}

const Info: FC<InfoProps> = ({ url, description }) => {
  return (
    <Box minH="full">
      <Input
        mb="4"
        py="1"
        px="2"
        h="max-content"
        variant="filled"
        placeholder="Enter website"
        defaultValue={url}
      />
      <Textarea
        maxLength={200}
        mb="2"
        py="1"
        px="2"
        h="max-content"
        resize="none"
        variant="filled"
        placeholder="Enter description"
        defaultValue={description}
      />
      <Text w="full" fontSize="sm">
        <span
          style={{
            display: "inline-block",
            padding: "4px 8px",
            margin: "8px 8px 0 0",
            borderRadius: 9999,
            backgroundColor: theme.colors.gray[200]
          }}
        >
          #engineering
        </span>
      </Text>
    </Box>
  );
};

export default Info;
