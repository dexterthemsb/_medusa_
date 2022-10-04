import { Button, ButtonProps } from "@chakra-ui/react";
import { FC, MouseEvent } from "react";

interface IconButtonProps extends ButtonProps {
  stopPropagation?: boolean;
}

const IconButton: FC<IconButtonProps> = ({
  stopPropagation = false,
  onClick,
  children,
  ...rest
}) => {
  const handleOnClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    if (stopPropagation) e.stopPropagation();
    if (!!onClick) onClick(e);
  };

  return (
    <Button
      variant="unstyled"
      rounded="xl"
      p="2"
      mx="1"
      minW="fit-content"
      minH="max-content"
      w="fit-content"
      h="max-content"
      color="gray.700"
      onClick={handleOnClick}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default IconButton;
