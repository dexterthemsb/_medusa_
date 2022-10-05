import { Box, Input, Text, Textarea, theme } from "@chakra-ui/react";

const Info = () => {
  return (
    <Box minH="full">
      <Input
        mb="4"
        py="1"
        px="2"
        h="max-content"
        variant="filled"
        placeholder="Enter website"
        defaultValue="https://www.oslash.com"
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
        defaultValue="OSlash shortcut."
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
