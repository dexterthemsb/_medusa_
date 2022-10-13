import { Box, Input, Text, Textarea, theme } from "@chakra-ui/react";
import { FC } from "react";

interface InfoProps {
  url: string;
  description: string;
  tags: string[];
}

const Info: FC<InfoProps> = ({ url, description, tags }) => {
  return (
    <Box minH="full">
      <Input
        mb="4"
        size="sm"
        variant="outline"
        borderColor="gray.300"
        bgColor="gray.50"
        defaultValue={url}
      />
      <Textarea
        maxLength={200}
        resize="none"
        variant="outline"
        size="sm"
        mb="2"
        bgColor="gray.50"
        borderColor="gray.300"
        rounded="default"
        placeholder="Enter description"
        defaultValue={description}
      />
      <Text w="full" fontSize="sm">
        {tags.map(tag => (
          <span
            key={tag}
            style={{
              display: "inline-block",
              padding: "6px 8px",
              margin: "8px 8px 0 0",
              borderRadius: 9999,
              backgroundColor: theme.colors.gray[200]
            }}
          >
            #{tag}
          </span>
        ))}
      </Text>
    </Box>
  );
};

export default Info;
